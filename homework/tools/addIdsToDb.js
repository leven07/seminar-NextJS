// Adds sequential numeric ids to each quote in db.json if missing.
// Run with: node tools/addIdsToDb.js
const fs = require('fs');
const path = require('path');

const dbPath = path.resolve(__dirname, '..', 'src', 'app', 'api', 'word', 'db.json');

function main() {
    const raw = fs.readFileSync(dbPath, 'utf8');
    const data = JSON.parse(raw);
    if (!Array.isArray(data)) {
        throw new Error('db.json root is not an array');
    }
    let nextId = 1;
    // Preserve existing ids if any; otherwise assign sequentially.
    for (const item of data) {
        if (item && (typeof item.id === 'number' || typeof item.id === 'string')) {
            // try to keep highest id to continue sequence if numeric
            const n = Number(item.id);
            if (!Number.isNaN(n) && Number.isFinite(n)) nextId = Math.max(nextId, n + 1);
        }
    }
    let seq = 1;
    for (const item of data) {
        if (item && item.id == null) {
            item.id = seq++;
        } else if (item && typeof item.id === 'number') {
            // keep existing numeric id, still increment seq to avoid duplicates if we re-run
            seq = Math.max(seq, item.id + 1);
        } else if (item) {
            // keep existing non-numeric id; still increment
            seq++;
        }
    }
    const out = JSON.stringify(data, null, 4) + '\n';
    fs.writeFileSync(dbPath, out, 'utf8');
    console.log(`Updated ${dbPath} with ids.`);
}

main();

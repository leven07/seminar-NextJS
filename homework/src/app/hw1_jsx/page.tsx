'use client';

import ArticleList from "./ArticleList";
import { useState } from 'react';
import { mock_article_response } from "./data/api";

type ArticleListUiOptions = {
    showRank: boolean;
    showBoard: boolean;
    showWriter: boolean;
    showHit: boolean;
    showTimeAgo: boolean;
}

// 옵션 리스트 정의
const option_list: { label: string; key: keyof ArticleListUiOptions }[] = [
    { label: 'Show Rank', key: 'showRank' },
    { label: 'Show Board', key: 'showBoard' },
    { label: 'Show Writer', key: 'showWriter' },
    { label: 'Show Hit', key: 'showHit' },
    { label: 'Show Time Ago', key: 'showTimeAgo' },
];

const Page = () => {
    const [options, setOptions] = useState<ArticleListUiOptions>({
        showRank: true,
        showBoard: true,
        showWriter: true,
        showHit: true,
        showTimeAgo: true,
    });

    const handleOptionChange = (option: keyof ArticleListUiOptions) => {
        setOptions(prev => ({
            ...prev,
            [option]: !prev[option]
        }));
    }

    return (
        <div className="flex flex-col justify-center items-center mt-20">
            {/* option bar */}
            <div className="text-[20px] font-semibold"> Options </div>
            <div className="flex flex-row gap-3 p-4">
                {option_list.map(option => (
                    <div key={option.key} className="hover:bg-gray-100 rounded-full p-3">
                        <label className="flex items-center gap-2">
                            <input type="checkbox" className="mr-1" checked={options[option.key]} onChange={() => handleOptionChange(option.key)} />
                            {option.label}
                        </label>
                    </div>
                ))}
            </div>
            <ArticleList
                showRank={options.showRank}
                showBoard={options.showBoard}
                showWriter={options.showWriter}
                showHit={options.showHit}
                showTimeAgo={options.showTimeAgo}
                data={mock_article_response.result}
            />
        </div>
    );
}

export default Page;
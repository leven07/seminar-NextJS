const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/app/$1'
  },
  testMatch: ['**/__test__/**/*.[jt]s?(x)', '**/__tests__/**/*.[jt]s?(x)'], // 두 폴더 모두 인식
}

module.exports = createJestConfig(customJestConfig)
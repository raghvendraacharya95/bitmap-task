export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coverageDirectory: './coverage',
    transform: {},
    modulePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/tests/helper']
};

module.exports = {
  preset: 'ts-jest',
  rootDir: process.cwd(),
  roots: ['<rootDir>/tests'],
  collectCoverage: true,
  moduleFileExtensions: ['ts', 'js'],
  modulePaths: ['<rootDir>/src'],
  collectCoverageFrom: ['src/**/*.ts'],
  timers: 'fake'
}

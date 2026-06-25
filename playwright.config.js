const LT_USERNAME = process.env.LT_USERNAME || '';
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || '';
const LT_BUILD_NAME = process.env.LT_BUILD_NAME || 'Assessment Playwright Build';
const LT_PROJECT_NAME = process.env.LT_PROJECT_NAME || 'Assessment';
const LT_TEST_NAME = process.env.LT_TEST_NAME || 'Assessment Playwright Test';

const ltCapabilities = {
  browserName: 'chrome',
  browserVersion: 'latest',
  platformName: 'Windows 11',
  'LT:Options': {
    user: LT_USERNAME,
    accessKey: LT_ACCESS_KEY,
    build: LT_BUILD_NAME,
    project: LT_PROJECT_NAME,
    name: LT_TEST_NAME,
    w3c: true,
    video: true,
    network: true,
    console: true,
  },
};

const ltWsEndpoint = LT_USERNAME && LT_ACCESS_KEY
  ? `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(ltCapabilities))}`
  : '';

const config = {
  testDir: './tests',
  timeout: 60 * 1000,
  expect: {
    timeout: 10 * 1000,
  },
  fullyParallel: true,
  retries: 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'https://www.testmuai.com/selenium-playground',
    actionTimeout: 30 * 1000,
    navigationTimeout: 30 * 1000,
    ignoreHTTPSErrors: true,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'on',
    recordHar: 'on',
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
    { name: 'webkit', use: { browserName: 'webkit' } },
    {
      name: 'lambdatest',
      use: {
        browserName: 'chromium',
        video: 'off',
        screenshot: 'off',
        trace: 'off',
        recordHar: 'off',
        launchOptions: {
          args: ['--no-sandbox'],
        },
        connectOptions: {
          wsEndpoint: ltWsEndpoint,
        },
      },
    },
  ],
  outputDir: 'test-results/',
};

module.exports = config;

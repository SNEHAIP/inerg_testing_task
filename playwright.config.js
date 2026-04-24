import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  //  HTML + other reports
  reporter: [
    ['html', { open: 'never' }],   // HTML report
    ['list']                       // terminal output
  ],

  use: {
    // Debugging features (recommended for framework)
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
  /*screenshot: 'on',
    video: 'on',
    trace: 'on',

  */

  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    {
      name: 'firefox',
      use: { browserName: 'firefox' },
    },
    {
      name: 'webkit',
      use: { browserName: 'webkit' },
    }
  ]
});
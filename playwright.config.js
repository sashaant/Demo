const { devices } = require('@playwright/test');
var date = new Date();
var ReportDate =date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2) + ("0" + date.getHours() ).slice(-2) + ("0" + date.getMinutes()).slice(-2) + ("0" + date.getSeconds()).slice(-2);
const config = {
  testDir: './tests/',
  testMatch: '**spec.js',
  timeout: 30 * 1000,
  expect: {
    timeout: 30*100,
  },
  fullyParallel: false,
  workers:1,
//retries:2,
 reporter: [['html', {  
    outputFile:'./test-results/report.html',
    open:'never'
  }],['allure-playwright']],

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        headless:true,
        screenshot:'on'
       },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'],
      headless:true,
      screenshot:'on'
     },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'],
      headless:true,
      screenshot:'on'
     },
    },
  /*{
    name: 'chromium',
    use: {
      ...devices['iPhone 12'],
      headless:false,
      screenshot:'on'
    }
  }*/
  ]  
};

module.exports = config;
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: "https://www.saucedemo.com/",
    headless: true,
   launchOptions:{ 
    // slowMo:3000,
    }
  },
  
  testDir: 'tests',
  testMatch: ['**/*.tests.ts']
});
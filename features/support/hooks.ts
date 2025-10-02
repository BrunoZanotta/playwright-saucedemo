import { BeforeAll, AfterAll, Before, After, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium, Browser } from 'playwright';
import { ICustomWorld } from './world'; 
import config from '../../playwright.config';

let browser: Browser;

setDefaultTimeout(60 * 1000);

BeforeAll(async () => {
  browser = await chromium.launch({ headless: true });
});

AfterAll(async () => {
  await browser.close();
});

Before(async function (this: ICustomWorld) {
  this.context = await browser.newContext({
    baseURL: config.use?.baseURL,
  });
  this.page = await this.context.newPage();
});

After(async function (this: ICustomWorld) { 
  await this.page?.close();
  await this.context?.close();
});
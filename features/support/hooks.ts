import { After, AfterAll, Before, BeforeAll, setDefaultTimeout, Status } from '@cucumber/cucumber';
import { chromium, Browser } from 'playwright';
import { ICustomWorld } from './world';
import config from '../../playwright.config';

let browser: Browser;

setDefaultTimeout(60 * 1000);

BeforeAll(async () => {
  const isCI = process.env.CI === 'true';
  browser = await chromium.launch({ headless: isCI });
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

After(async function (this: ICustomWorld, { result }) { 
  if (result?.status === Status.FAILED) {
    const screenshot = await this.page!.screenshot({ path: 'screenshots/failed.png', fullPage: true });
    this.attach(screenshot, 'image/png');
  }

  await this.page?.close();
  await this.context?.close();
});
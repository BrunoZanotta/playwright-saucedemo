import { Page, Locator } from 'playwright';

export class InventoryPage {
  readonly page: Page;
  readonly addToCartButton: Locator;
  readonly shoppingCartLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addToCartButton = page.locator('[data-test^="add-to-cart-"]').first();
    this.shoppingCartLink = page.locator('.shopping_cart_link');
  }

  async addFirstProductToCart() {
    await this.addToCartButton.click();
  }

  async goToCart() {
    await this.shoppingCartLink.click();
  }
}
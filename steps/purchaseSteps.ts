import { Given, When, Then } from '@cucumber/cucumber';
import { ICustomWorld } from '../features/support/world';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

Given('que eu estou logado no sistema com o usuário {string} e senha {string}', async function (this: ICustomWorld, username, password) {
  const loginPage = new LoginPage(this.page!);
  await loginPage.navigate();
  await loginPage.login(username, password);
});

When('eu adiciono o primeiro produto da lista ao carrinho', async function (this: ICustomWorld) {
  const inventoryPage = new InventoryPage(this.page!);
  await inventoryPage.addFirstProductToCart();
});

When('eu navego para o carrinho de compras', async function (this: ICustomWorld) {
  const inventoryPage = new InventoryPage(this.page!);
  await inventoryPage.goToCart();
});

When('eu prossigo para o checkout', async function (this: ICustomWorld) {
  const cartPage = new CartPage(this.page!);
  await cartPage.proceedToCheckout();
});

When('eu preencho as informações de checkout com nome {string}, sobrenome {string} e CEP {string}', async function (this: ICustomWorld, firstName, lastName, postalCode) {
  const checkoutPage = new CheckoutPage(this.page!);
  await checkoutPage.fillCheckoutInformation(firstName, lastName, postalCode);
  await checkoutPage.continueCheckout();
});

When('eu finalizo a compra', async function (this: ICustomWorld) {
  const checkoutPage = new CheckoutPage(this.page!);
  await checkoutPage.finishPurchase();
});

Then('eu devo ver a mensagem de confirmação {string}', async function (this: ICustomWorld, message) {
  const checkoutPage = new CheckoutPage(this.page!);
  await checkoutPage.assertPurchaseCompleted();
});
import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/LoginPage';
import { ICustomWorld } from '../features/support/world';


Given('que eu estou na página de login', async function (this: ICustomWorld) {
  const loginPage = new LoginPage(this.page!);
  await loginPage.navigate();
});

When('eu preencho o usuário com {string} e a senha com {string}', async function (this: ICustomWorld, username, password) {
  const loginPage = new LoginPage(this.page!);
  await loginPage.login(username, password);
});

Then('eu devo ser redirecionado para a página de produtos', async function (this: ICustomWorld) {
  const loginPage = new LoginPage(this.page!);
  await loginPage.assertLoginSuccess();
});
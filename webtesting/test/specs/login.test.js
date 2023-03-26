const MainPage = require('../pageobjects/main.page.js');
const LoginPage = require('../pageobjects/login.page.js');
const { incorrectCredentialTestData, correctCrendential } = require('../data/test.data');

describe('User is able to login in Demo shopping page', () => {

      incorrectCredentialTestData.forEach(data => {
            it('User should login with incorrect password/username', async () => {
                  await MainPage.open();
                  await LoginPage.login(data.username, data.password);
                  await expect(LoginPage.signInMessage).toHaveText('Incorrect user name or password.',
                        { message: `expected unsuccesfull login using: ${data}` });
            });
      });

      it('User should login successfully and see her/him profile', async () => {
            await MainPage.open();
            await LoginPage.login(correctCrendential.username, correctCrendential.password);
           // await expect(LoginPage.menuUserLink).toHaveText(correctCrendential.username);
      });

});
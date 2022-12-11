const MainPage = require('../pageobjects/main.page.js');
const LoginPage = require('../pageobjects/login.page.js');

describe('User is able to login in Demo shopping page', () => {

      let testData = [
            { username: "Penny", password: "testing123" },
            { username: "penny1", password: "Testing123" }
      ]

      testData.forEach(data => {
            it('User should login with incorrect password/username', async () => {
                  await MainPage.open();
                  await LoginPage.login(data.username, data.password);
                  await expect(LoginPage.signInMessage).toHaveText('Incorrect user name or password.');
            });
      });
      
      it('User should login successfully and see her/him profile', async () => {
            await MainPage.open();
            await LoginPage.login("Penny", "Testing123");
            await expect(LoginPage.menuUserLink).toHaveText("Penny");
      });

});
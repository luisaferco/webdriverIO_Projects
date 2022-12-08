const MainPage = require('../pageobjects/main.page.js');
const LoginPage = require('../pageobjects/login.page.js');

describe('User is able to login in Demo shopping page', () => {

      let testData = [
            { username: "pennyPe1@gmail.com", password: "testing123" },
            { username: "penny1@gmail.com", password: "Testing123" }
      ]

      testData.forEach(data => {
            it('He/she should login with incorrect password/email', async () => {
                  await MainPage.open();
                  await LoginPage.login(data.username, data.password);
                  await expect(LoginPage.signInMessage).toHaveText('Incorrect user name or password.');
            });
      });
      

});
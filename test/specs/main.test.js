const mainPage = require("../pageobjects/main.page");


describe('User navigates to the Main page', () => {

      it('user should see 3 items in the offer details section', async () => {
            await mainPage.open();
            await mainPage.navigateToPopularItems();
            await expect(mainPage.popularItems).toBeElementsArrayOfSize(3);

      })
});
const previewCart = require("../pageobjects/previewCart.page");
const checkoutPage = require("../pageobjects/checkout.page");
const detailsPage = require("../pageobjects/details.page");
const mainPage = require("../pageobjects/main.page");
const { items } = require("../data/test.data");

describe('Go to checkout section after adding products to cart', () => {

      it('user should wether of create and account or sign in with an existing username', async () => {
            const itemName = items.find(item=> item.productType.startsWith('speakers'));
            await mainPage.open();
            await mainPage.goToSpeakersSection();
            await detailsPage.addItemToCart(itemName.itemName);
            await previewCart.checkoutItems();
            await expect(checkoutPage.signInOptions).toHaveText(['Already have an account?', 'New user?']);
      })

})
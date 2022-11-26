const MainPage = require('../../test/pageobjects/main.page.js');
const DetailsPage = require('../../test/pageobjects/details.page');
const BagPage = require('../../test/pageobjects/bag.page');

describe('Adding products to cart, a user should review details', () => {

    it('should see products added to cart from modal', async () => {
        const itemName = 'HP Roar Mini Wireless Speaker';
        await MainPage.open();
        await MainPage.goToSpeakersSection();
        await DetailsPage.addItemToCart(itemName);
        await BagPage.goToCartDetails(itemName);
        await expect(DetailsPage.details).toHaveText(itemName, {ignoreCase: true});
    });
});



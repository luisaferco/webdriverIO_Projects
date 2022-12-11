const MainPage = require('../pageobjects/main.page.js');
const DetailsPage = require('../pageobjects/details.page');
const BagPage = require('../pageobjects/bag.page');

describe('Adding products to cart, a user should review details', () => {

    it('User should see products added to cart from modal', async () => {
        const itemName = 'HP Roar Mini Wireless Speaker';
        await MainPage.open();
        await MainPage.goToSpeakersSection();
        await DetailsPage.addItemToCart(itemName);
        await BagPage.goToCartDetails(itemName);
        await expect(DetailsPage.details).toHaveText(itemName, { ignoreCase: true });
    });

    it('User should increment quanitity of items to add to cart', async () => {
        const itemName = 'HP Z3200 Wireless Mouse';
        await MainPage.open();
        await MainPage.goToMicesSection();
        await DetailsPage.addItemToCart(itemName, 3);
        await expect(BagPage.cartLink).toHaveText('4');
    });

    afterEach('clean cookie data', async () => {
        await browser.deleteCookies();
    })

});



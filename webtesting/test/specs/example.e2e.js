const LoginPage = require('../pageobjects/login.page');
const MainPage = require(' ../pageobjects/main.page');
const SecurePage = require('../pageobjects/secure.page');
const DetailsPage = require('../pageobjects/details.page');
const BagPage = require('../pageobjects/bag.page');

describe('Adding products to cart, a user should review details', () => {

    it('should see products added to cart from modal', async () => {
        const itemName = 'HP Roar Mini Wireless Speaker';
        await MainPage.open();
        await MainPage.goToSpeakersSection();
        await DetailsPage.addItemToCart(itemName);
        await BagPage.goToDetailsItem(itemName);
        await expect(DetailsPage.getDetailsModal).toEqual(itemName);
    });
});



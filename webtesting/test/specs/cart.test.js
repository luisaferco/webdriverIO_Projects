const MainPage = require('../pageobjects/main.page.js');
const DetailsPage = require('../pageobjects/details.page');
const previewCart = require('../pageobjects/previewCart.page');
const stringUtils = require('../utils/string.utils');
const shoppingCart = require('../pageobjects/shoppingCart.page');
const { items } = require("../data/test.data");

describe('Adding products to cart, a user should review details', () => {

    beforeEach('Open main page', async()=>{
        await MainPage.open();
    });

    it('User should see products added to cart from modal', async () => {
        const itemName = items.filter(item => item.productType.startsWith('speakers')).pop().itemName;
        await MainPage.goToSpeakersSection();
        await DetailsPage.addItemToCart(itemName);
        await previewCart.goToItemDetails(itemName);
        await expect(DetailsPage.details).toHaveText(itemName, { ignoreCase: true });
    });

    it('User should increment quantity of items to add to cart', async () => {
        const itemName = items.filter(item => item.productType.startsWith('mices')).pop().itemName;
        const numberItems = 3;
        await MainPage.goToMicesSection();
        await DetailsPage.addItemToCart(itemName, numberItems);
        await expect(previewCart.cartLink).toHaveText(numberItems.toString());
        await previewCart.previewCartDetails();
        const quantity = await previewCart.getQuantityItem(itemName);
        await expect(quantity).toEqual(stringUtils.mapQuantity(numberItems));
    });

    it('The user goes to the shopping cart section should see that the summary of the total purchase is matching to the sum of the price of the items.', async () => {
        const speakerItem = items.filter(item => item.productType.startsWith('speakers')).pop().itemName;
        const mouseItem = items.filter(item => item.productType.startsWith('mices')).pop().itemName;
        await MainPage.goToSpeakersSection();
        await DetailsPage.addItemToCart(speakerItem);
        await DetailsPage.navigateTo('HOME');
        await MainPage.goToMicesSection();
        await DetailsPage.addItemToCart(mouseItem, 2);
        await previewCart.goToCart();
        await expect(shoppingCart.nameOfItems).toHaveText([speakerItem, mouseItem], { ignoreCase: true });
        let pricesOfList = await shoppingCart.getPricesOfItemList();
        let total = await shoppingCart.summaryTotalPrice.getText();
        let totalPrice = stringUtils.currencyStringToNumber(total);
        await expect(totalPrice).toEqual(stringUtils.sumPrices(pricesOfList))
    });

    afterEach('clean cookie data', async () => {
        await browser.deleteCookies();
        await browser.reloadSession()
    })

});



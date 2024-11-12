import MainPage from '../pageobjects/main.page.js';
import DetailsPage from '../pageobjects/details.page';
import previewCart from '../pageobjects/previewCart.page';
import { mapQuantity, currencyStringToNumber, sumPrices } from '../utils/string.utils';
import shoppingCart from '../pageobjects/shoppingCart.page';

describe('Adding products to cart, a user should review details', () => {

    it('User should see products added to cart from modal', async () => {
        const itemName = 'HP Roar Mini Wireless Speaker';
        await MainPage.open();
        await MainPage.goToSpeakersSection();
        await DetailsPage.addItemToCart(itemName);
        await previewCart.goToItemDetails(itemName);
        await expect(DetailsPage.details).toHaveText(itemName, { ignoreCase: true });
    });

    it('User should increment quantity of items to add to cart', async () => {
        const itemName = 'HP Z3200 Wireless Mouse';
        const numberItems = 3; 
        await MainPage.open();
        await MainPage.goToMicesSection();
        await DetailsPage.addItemToCart(itemName, numberItems);
        await expect(previewCart.cartLink).toHaveText(numberItems.toString());
        await previewCart.previewCartDetails();
        const quantity = await previewCart.getQuantityItem(itemName);
        await expect(quantity).toEqual(mapQuantity(numberItems));
    });

    it('The user going to the shopping cart section should see that the summary of the total purchase is according to the sum of the price of the items.', async() => {
        const itemName = 'HP Roar Mini Wireless Speaker';
        const itemName2 = 'HP Z3200 Wireless Mouse';
        await MainPage.open();
        await MainPage.goToSpeakersSection();
        await DetailsPage.addItemToCart(itemName);
        await DetailsPage.navigateTo('HOME');
        await MainPage.goToMicesSection();
        await DetailsPage.addItemToCart(itemName2, 2);
        await previewCart.goToCart();
        await expect(shoppingCart.nameOfItems).toHaveText(['HP Z3200 Wireless Mouse','HP Roar Mini Wireless Speaker'], { ignoreCase: true });
        let pricesOfList = await shoppingCart.getPricesOfItemList();
        let total = await shoppingCart.summaryTotalPrice.getText();
        let totalPrice = currencyStringToNumber(total);
        await expect(totalPrice).toEqual(sumPrices(pricesOfList))
    });

    afterEach('clean cookie data', async () => {
        await browser.deleteCookies();
        await browser.reloadSession()
    })

});



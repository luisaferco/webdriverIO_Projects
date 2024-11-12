import Page from './page';

class DetailsPage extends Page {
    get addToCartBtn() {
        return $('#productProperties > div.fixedBtn > button');
    }

    get items() {
        return $$('a.productName');
    }

    get addToCartBtn() {
        return $('#productProperties button');
    }

    get details() {
        return $('#Description > h1');
    }

    get addItemBtn() {
        return $('#productProperties div.plus');
    }

    get quantityTxt() {
        return $('#productProperties  input[name=quantity]');
    }

    get navitationOptions() {
        return $$('body > div.uiview.ng-scope > nav > a');
    }

    async addItemToCart(itemName, quantity = 1) {
        let elements = await this.items.map(item => item.getText());
        const index = elements.findIndex(element => element.startsWith(itemName));
        await this.items[index].click();
        await this.addQuantity(quantity);
        await this.addToCartBtn.click();
    }

    async addQuantity(number) {
        let quantity = 1
        while (number > quantity) {
            await this.addItemBtn.click();
            quantity++;
        }
    }

    async navigateTo(option) {
        let navOption = await this.navitationOptions.find(async (item) => 
            (await item.getText()).startsWith(option));
        await navOption.click();
    }
}

export default new DetailsPage();
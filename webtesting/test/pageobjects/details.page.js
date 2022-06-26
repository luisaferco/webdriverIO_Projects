const Page = require('./page');

class DetailsPage extends Page {
    get addToCartBtn () {
        return $('#productProperties > div.fixedBtn > button');
    }
}
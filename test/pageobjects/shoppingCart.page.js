import Page from './page';
import { currencyStringToNumber } from '../utils/string.utils';

class ShoppingCartPage extends Page {

      get nameOfItems() {
        return $$('#shoppingCart td:nth-child(2) label');
      }

      get quantityOfItems() {
            return $$('#shoppingCart td.smollCell.quantityMobile label:nth-child(2)');
      }

      get priceOfitem() {
            return $$('#shoppingCart td.smollCell p.price')
      }

      get summaryTotalPrice() {
            return $('#shoppingCart > table  span.roboto-medium.ng-binding');
      }

      get checkoutBtn() {
            return $('#checkOutButton');
      }

      async getPricesOfItemList() {
            let prices = await this.priceOfitem.map(price => price.getText());
            return prices.map(priceString => currencyStringToNumber(priceString));

      }

}

export default new ShoppingCartPage();
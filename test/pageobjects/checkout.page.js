import Page from './page';

class CheckoutPage extends Page {

      get signInOptions() {
            return $$('.noUserSection label.roboto-medium');
      }


}

export default new CheckoutPage();
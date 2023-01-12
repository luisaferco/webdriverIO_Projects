const Page = require('./page');

class CheckoutPage extends Page {

      get signInOptions() {
            return $$('.noUserSection label.roboto-medium');
      }


}

module.exports = new CheckoutPage();
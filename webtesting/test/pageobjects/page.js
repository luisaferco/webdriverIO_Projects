/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    async open(path) {
        await browser.url(`https://www.advantageonlineshopping.com/#/${path}`)
    }

    async open() {
        await browser.url('https://www.advantageonlineshopping.com/#/');
    }

     /**
     * custom click with specific options to adapt it to page object
     */
     async clickOn(element, message = 'waiting until element is clickeable'){
        await element.waitForClickable(
            {
                timeout: 15000,
                timeoutMsg: message
            });
            element.click();    
    }
}

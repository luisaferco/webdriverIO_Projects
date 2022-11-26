const Page = require('./page');

class MainPage extends Page {

    get speakersSection() {
        return $('#speakersImg');
    }

    get tabletsSection() {
        return $('#tabletsImg');
    }

    get laptopsSection() {
        return $('#laptopsImg');
    }

    get micesSection() {
        return $('#miceImg');
    }

    get headphonesSection() {
        return $('#headphonesImg');
    }

    async goToSpeakersSection() {
        await browser.setTimeout({ 'pageLoad': 120000 });
        await browser.waitUntil(
            async () => (await this.speakersSection.isDisplayed()),
            {
                timeout: 60000,
                timeoutMsg: 'expected page to be loaded after 1m'
            }
        );
        await this.speakersSection.click();
        const items = await $('a.productName')
        await items.waitForDisplayed({ timeout: 10000 })
       
    }

}

module.exports = new MainPage();
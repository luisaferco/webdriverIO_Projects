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

    get popularItemsSection() {
        return $('#popular_items > h3');
    }

    get popularItems() {
        return $$('#popular_items > div > div');
    }

    async goToSpeakersSection() {
        await this.speakersSection.isClickable(
            {
                timeout: 60000,
                timeoutMsg: 'expected section to be loaded after 1m'
            }
        );
        await this.speakersSection.click();
        const items = await $('a.productName')
        await items.waitForDisplayed({ timeout: 10000 })    
    }

    async goToMicesSection() {
        await this.micesSection.isClickable(
            {
                timeout: 60000,
                timeoutMsg: 'expected section to be loaded after 1m'
            }
        );
        await this.micesSection.click();
        const items = await $('a.productName')
        await items.waitForDisplayed({ timeout: 10000 })    
    }

    async navigateToPopularItems() {
       await this.popularItemsSection.scrollIntoView();
    }
}

module.exports = new MainPage();
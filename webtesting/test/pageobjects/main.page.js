const Page = require('./page');

class MainPage extends Page {

    get speakersSection() {
        return $('#speakersImg');
    }

    get tabletsSection () {
        return $('#tabletsImg');
    }

    get laptopsSection () {
        return $('#laptopsImg'); 
    }

    get micesSection () {
        return $('#miceImg');
    }

    get headphonesSection () {
        return $('#headphonesImg');
    }

    async goToSpeakersSection() {
        await this.speakersSection.click();
    }

}

module.exports = new MainPage();
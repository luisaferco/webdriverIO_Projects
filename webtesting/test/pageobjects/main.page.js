const Page = require('./page');

class MainPage extends Page {

    get speakersSection() {
        return $('#speakersImg');
    }

    get tabletsSection () {
        return $('tabletsImg');
    }

    get laptopsSection () {
        return $('laptopsImg'); 
    }

    get micesSection () {
        return $('miceImg');
    }

    get headphonesSection () {
        return $('headphonesImg');
    }
}

module.exports = new MainPage();
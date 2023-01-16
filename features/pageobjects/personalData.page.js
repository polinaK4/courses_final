const { PersonalPage } = require('./personal.page');

class PersonalDataPage extends PersonalPage {
    constructor () {
        super();
    }
    get nicknameField () {
        return 'div.inp-s>label>input';
    }
    get saveButton () {
        return 'button.button-small';
    }

}

module.exports = { PersonalDataPage }
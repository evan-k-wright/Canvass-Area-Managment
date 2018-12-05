const data = require('../sources/data')

module.exports = {
    after: browser => {
        browser
    },

    'Configure Pins': browser => {
        let configurePins = browser.page.configurePins()
        configurePins.navigate()
            //login
            .waitForElementVisible('@companyURL', 5000)
            .waitForElementVisible('@username', 5000)
            .waitForElementVisible('@password', 5000)
            .setValue('@companyURL', data.company)
            .setValue('@username', data.username)
            .setValue('@password', data.password)
            .waitForElementVisible('@loginButton', 5000)
            .click('@loginButton')
            .waitForElementVisible('@salesHub', 5000)
            .click('@salesHub')
            .waitForElementVisible('@canvassApp', 5000)
            .click('@canvassApp')
            .waitForElementVisible('@canvass', 5000) 
            
    }
}
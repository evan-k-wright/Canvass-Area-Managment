module.exports = {
    url: 'http://admin.salesos.info/users/login',
    elements: {
        //login
            canvassApp: 'a[class="enabled app-canvass"]',
            canvass: 'div[class="current-app"]',
            companyURL: 'input[placeHolder="Company URL"]',
            loginButton: 'button[type="submit"]', 
            password: 'input[placeHolder="Password"]',
            salesHub: 'div[class="current-app"]',
            username: 'input[placeHolder="Username"]',

        //assign rep
            area4: 'tr[data-name="test area 4"]',
            areaMang: 'a[href="/canvass/area"]', 
            assign: 'a[id="addRep"]',
            back: 'a[class="back"]',
            fourRep: 'tr[data-id="6270"]',
            repAssigned: 'tr[data-id="6270"]',
            rep4: 'option[value="6270"]',
            a1Evan: 'option[value="127"]',

            //xpath
                // assignedRep: {
                //     selector: '(//td[.="4 Rep Test Testing"])[2]',
                //     locateStrategy: 'xpath'
                // },

                removeRep: {
                    selector: '//a[@class="remove-rep"]',
                    locateStrategy: 'xpath'
                },

                unassigned: {
                    selector: '//a[.="Unassigned Areas"]',
                    locateStrategy: 'xpath'
                },
    }
}

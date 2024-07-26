module.exports={
    'Google advanced search: nightwatch'(browser){
       
        browser
     
            .url('http://localhost:5174/')
            // .setValue('input[placeholder="Enter email address"]','mkraofx@gmail.com')
            // .setValue('input[type="password"]','Pass@123')
            // .click('button[id="Log-in button"]')
            // .click('a[id="My team"]')
            // .click('a[id="Add User"]')
            // .click('input[value="admin"]')
            // .click('input[value="admin_assistant_manager"]')
            // .click('input[value="admin_creative_manager"]')
            .setValue('input[id="first name"]',"deepthi")
            .setValue('input[id="second name"]',"k")
            .setValue('input[id="email"]',"abhi@gmail.com")
            .setValue('input[type="password"]','Pass@123')
            // .click('input[id="sendStatus"]')
            .click('button[id="submit"]')
            .saveScreenshot("tests_output/google1.png")
            // .pause(3000)
    }}
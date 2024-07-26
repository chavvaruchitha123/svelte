module.exports = {
  'Google advanced search: nightwatch': function (browser) {
    browser
      .url('http://localhost:5174/')
      .waitForElementPresent('input[id="first name"]', 10000)
      .setValue('input[id="first name"]', "deepthi")
      .waitForElementPresent('input[id="second name"]', 10000)
      .setValue('input[id="second name"]', "k")
      .waitForElementPresent('input[id="email"]', 10000)
      .setValue('input[id="email"]', "abhi@gmail.com")
      .waitForElementPresent('input[type="password"]', 10000)
      .setValue('input[type="password"]', 'Pass@123')
      .waitForElementPresent('button[id="submit"]', 10000)
      .click('button[id="submit"]')
      .saveScreenshot("tests_output/google1.png")
      .end();
  }
};

'use strict';
 
const assert = require('assert');
const webdriver = require('selenium-webdriver');
const { Before, Given, When, Then } = require('cucumber');

let driver;

Given('I have visited the Google official web page on www.google.com', function (next) {
  driver = new webdriver.Builder().forBrowser('chrome').build();
  driver.get('http://www.google.com').then(next);;
});

Then('I should be able to see Google in the title bar', function () {
  driver.getTitle().then((title) => {
    assert.equal(title, 'Google');
    driver.quit();
  });
});
/*const { expect } = require("chai")
describe ("Interaction with web element",function () { 
    it("Login Functionality ", function(){
        browser.url('/');

        const username = $('#user-name');
        username.waitForDisplayed()
        username.setValue("standard_user");

        browser.pause("2000");

        const password = $('#password');
        password.waitForDisplayed();
        password.setValue('secret_sauce');

        browser.pause("2000");

        const Loginbutton = $('#login-button');
        Loginbutton.waitForClickable();
        Loginbutton.click();

        browser.pause("2000");

        const add_cart = $('#add-to-cart-sauce-labs-bike-light');
        add_cart.waitForClickable();
        add_cart.click();

        browser.pause("2000");

        const click_cart =$('#shopping_cart_container');
        click_cart.waitForClickable();
        click_cart.click();

        browser.pause("2000");

        const heading_cart = $('.title*=Your Cart');
        heading_cart.waitForDisplayed();
        let val = heading_cart.getText();
        let txt = 'Your Cart';
        console.log(txt == val);

        browser.pause("2000");


        const cart_check=$('.inventory_item_name*=Sauce Labs Bike Light');
        heading_cart.waitForDisplayed();
        let value = heading_cart.getText();
        let text = 'Sauce Labs Bike Light';
        console.log(text == value);

        browser.pause("2000");

        const checkout = $('#checkout');
        checkout.waitForClickable();
        checkout.click();

        browser.pause("2000");

        const heading_info = $('.title*=Checkout: Your Information');
        heading_info.waitForDisplayed();
        let value_info = heading_info.getText();
        let text_info = 'Checkout: Your Information';
        console.log(text_info == value_info);

        browser.pause("2000");

        const First_name = $('#first-name');
        First_name.waitForDisplayed();
        First_name.setValue("SAMIAPPAN");

        browser.pause("2000");

        const Last_name= $('#last-name');
        Last_name.waitForDisplayed();
        Last_name.setValue("J");

        browser.pause("2000");
        
        const Zip_code= $('#postal-code');
        Zip_code.waitForDisplayed();
        Zip_code.setValue("621212");

        browser.pause("2000");

        const contin= $('#continue');
        contin.waitForClickable();
        contin.click();
        
        browser.pause("2000");

        const heading_checkout = $('.title*=Checkout: Your Information');
        heading_checkout.waitForDisplayed();
        let heading_checkout = heading_checkout.getText();
        let text_checkout = 'Checkout: Overview';
        console.log(text_checkout == value_checkout);

        browser.pause("2000");
                

        const finish =  $('#finish');
        finish.waitForClickable();
        finish.click();

        const heading_complete = $('#header_container');
        heading_complete.waitForDisplayed();
        let heading_checkout = heading_complete.getText();
        let text_checkout = 'Checkout: Overview';
        console.log(text_checkout == value_checkout);
                 
        
    });

})*/
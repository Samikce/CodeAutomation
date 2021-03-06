const { expect } = require("chai")
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

        const heading_cart = $('<span />');
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

        const heading_checkout = $('<span />');
        heading_checkout.waitForDisplayed();
        let value_checkout = heading_checkout.getText();
        let text_checkout = 'Checkout: Your Information';
        console.log(text_checkout == value_checkout);

        browser.pause("2000");
                
        const item=$('.inventory_item_name*=Sauce Labs Bike Light');
        item.waitForDisplayed();
        let value_item = heading_cart.getText();
        let text_item = 'Sauce Labs Bike Light';
        console.log(text_item == value_item);

        browser.pause("2000");

        const price = $('.inventory_item_price*=$9.99');
        price.waitForDisplayed();
        let price_check = price.getValue();

        browser.pause("2000");

        const payment_info =  $('.summary_value_label*=SauceCard #31337');
        payment_info.waitForDisplayed();
        console.log(payment_info.getText());

        browser.pause("2000");

        const ship_info =  $('.summary_value_label*=FREE PONY EXPRESS DELIVERY!');
        ship_info.waitForDisplayed();
        console.log(payment_info.getText());

        browser.pause("2000");

        const item_total =  $('.summary_subtotal_label*=9.99');
        let item_tot_check =  item_total.getValue();
        console.log(item_tot_check == price_check);

        browser.pause("2000");

        const tax =  $('.summary_tax_label*=0.80');
        tax.waitForDisplayed();
        let tax_price =  tax.getValue();

        const total =  $('.summary_total_label*=10.79');
        total.waitForDisplayed();
        let tot =  total.getValue();
        let Final_total = tax_price+item_total;
        console.log(tot == Final_total);

        const finish =  $('#finish');
        finish.waitForClickable();
        finish.click();

        const heading_complete = $('.complete-header*=THANK YOU FOR YOUR ORDER');
        heading_complete.waitForDisplayed();
        let value_complete = heading_complete.getText();
        let text_complete = 'Checkout: Overview';
        console.log(text_complete == value_complete);

        browser.pause('3000');

        const back_home = $('#back-to-products');
        back_home.waitForClickable();
        back_home.click();

        browser.pause('3000');
                 
        
    });

})
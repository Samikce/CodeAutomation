const { expect } = require("chai")
describe ("Interaction with web element",function () { 
    it("Login Functionality ", function(){
        browser.url('/');
        const username = $('#user-name');
        username.waitUntil(function () {
            return this.setValue('standard_user');
        }, {
            timeout: 5000,
            timeoutMsg: 'expected user name will be entered'
        });


        const password = $('#password');
        password.waitUntil(function () {
            return this.setValue('secret_sauce');
        }, {
            timeout: 5000,
            timeoutMsg: 'expected user name will be entered'
        });

        const Loginbutton = $('#login-button');
        Loginbutton.waitForClickable({ timeout: 5000 });
        Loginbutton.click();
        Loginbutton.waitForClickable({reverse: true });

        const add_cart = $('#add-to-cart-sauce-labs-bike-light');
        add_cart.waitForClickable({ timeout: 5000 });
        add_cart.click();
        add_cart.waitForClickable({reverse: true });

        let heading_cart = $('#header_container');
        heading_cart.waitUntil(function () {
        return this.getText() === 'Your Cart'
        }, {
        timeout: 5000,
        timeoutMsg: 'expected text to be same'
        });
        const cart = $('#shopping_cart_container');
        cart.waitForClickable({ timeout: 5000 });
        cart.click();
        cart.waitForClickable({reverse: true });

        const cart_check=$('#item_0_title_link');
        cart_check.waitUntil(function () {
        return this.getText() === 'Sauce Labs Bike Light'
         }, {
        timeout: 5000,
        timeoutMsg: 'expected text to be same'
         });

        const checkout = $('#checkout');
        checkout.waitForClickable({ timeout: 5000 });
        checkout.click();
        checkout.waitForClickable({reverse: true });

        const heading_info = $('#header_container');
        heading_info.waitUntil(function () {
        return this.getText() === 'Checkout: Your Information'
            }, {
            timeout: 5000,
            timeoutMsg: 'expected text to be same'
             });
        const First_name = $('#first-name');
        username.waitUntil(function () {
            return this.setValue('SAMIAPPAN');
        }, {
            timeout: 5000,
            timeoutMsg: 'expected first name will be entered'
        });
        
        const Last_name= $('#last-name');
        password.waitUntil(function () {
            return this.setValue('J');
        }, {
            timeout: 5000,
            timeoutMsg: 'expected Last name will be entered'
        });
        
        const Zip_code= $('#postal-code');
        password.waitUntil(function () {
            return this.setValue('621212');
        }, {
            timeout: 5000,
            timeoutMsg: 'expected Last name will be entered'
        });

        const contin= $('#continue');
        contin.waitForClickable({ timeout: 5000 });
        contin.click();
        contin.waitForClickable({reverse: true });

        const heading_checkout= $('#header_container');
        heading_checkout.waitUntil(function () {
            return this.getText() === 'Checkout: Overview'
                }, {
                timeout: 5000,
                timeoutMsg: 'expected text to be same'
                 });

                
        const item =$('#item_0_title_link');
        item.waitUntil(function () {
            return this.getText() === 'Sauce Labs Bike Light'
                }, {
                timeout: 5000,
                timeoutMsg: 'expected text to be same'
                 });

        const price = await $('#inventory_item_price');
        let price_check = await price.getValue();

        const payment_info = await $('#summary_value_label');
        console.log(await payment_info.getText());

        const shipping_info = await $('#summary_subtotal_label');
        console.log(await shipping_info.getText());

        const item_total = await $('#summary_subtotal_label');
        let item_tot_check = await item_total.getValue();
        console.log(item_tot_check.isEqual(price_check));

        const tax = await $('#summary_tax_label');
        let tax_price = await tax.getValue();

        const total = await $('#summary_total_label');
        let tot = await total.getValue();
        let Final_total = tax_price+item_total;
        console.log(tot.isEqual(Final_total));

        const finish =  $('#finish');
        finish.waitForClickable({ timeout: 5000 });
        finish.click();
        finish.waitForClickable({reverse: true });

        const heading_complete = $('#header_container');
        heading_complete.waitUntil(function () {
            return this.getText() === 'THANK YOU FOR YOUR ORDER';
                }, {
                timeout: 5000,
                timeoutMsg: 'expected text to be same'
                 });
        
    });
})
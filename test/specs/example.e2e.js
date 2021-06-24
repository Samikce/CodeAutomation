const { expect } = require("chai")
describe ("Interaction with web element",function () { 
    it("Login Functionality ", function(){
        browser.url('/');
        wait: 2000;
        const username = $('#user-name');
        username.setValue('standard_user');
        wait: 2000;
        browser.pause("10000");
        const password = $('#password');
        password.setValue('secret_sauce');
        wait: 2000;
        browser.pause("10000");
        const Loginbutton = $('#login-button');
        Loginbutton.click();
        wait: 2000;
    })
    it("Add cart",()=> {
        it("Add cart",()=>{
        browser.url('/');
        wait:2000;
        const cart = $('#add-to-cart-sauce-labs-bike-light');
        cart.click();

    })
    it("Go to cart",()=> {
        it("Go to cart",()=>{
        browser.url('/');
        wait:2000;
        let heading = $('#header_container');
        let txt = 'Your Cart';
        let val = heading.getText();
        console.log(val.isEqual(txt));
        const cart = $('#shopping_cart_container');
        cart.click();
        wait:2000;
        const cart_check=$('#item_0_title_link');
        let value = cart_check.getText();
        if(value == 'Sauce Labs Bike Light');
            console.log("Pass");
        wait:2000;
        const checkout = $('#checkout');
        checkout.click();
        wait:2000;
    })
    it("Deatails of the shiping ", function(){
        browser.url('/');
        wait: 2000;
        let heading = $('#header_container');
        let txt = 'Checkout: Your Information';
        let val = heading.getText();
        console.log(val.isEqual(txt));
        const First_name = $('#first-name');
        username.setValue('SAMIAPPAN');
        wait: 2000;
        browser.pause("10000");
        const Last_name= $('#last-name');
        password.setValue('J');
        wait: 2000;
        browser.pause("10000");
        const Zip_code $('#postal-code');
        password.setValue('621212');
        wait: 2000;
        const continue= $('#continue');
        continue.click();
        wait: 2000;
    })
    it("Checkout Overview", function(){
        browser.url('/');
        wait: 2000;
        let heading = $('#header_container');
        let txt = 'Checkout: Overview';
        let val = heading.getText();
        console.log(val.isEqual(txt));
        const item =$('#item_0_title_link');
        let value = item.getText();
        let txt = 'Sauce Labs Bike Light';
        console.log(value.isEqual(txt));
        const price = $('#inventory_item_price');
        let price_check = price.getValue();
        const payment_info = $('#summary_value_label');
        console.log(payment_info.getText());
        const shipping_info = $('#summary_subtotal_label');
        console.log(shipping_info.getText());
        const item_total = $('#summary_subtotal_label');
        let item_tot_check = item_total.getValue();
        console.log(item_tot_check.isEqual(price_check));
        const tax = $('#summary_tax_label');
        let tax_price = tax.getValue();
        const total = $('#summary_total_label');
        let tot = total.getValue();
        let Final_total = tax_price+item_total;
        console.log(tot.isEqual(Final_total));
        const finish = $('#finish');
        finish.click();
    })
    it("Checkout Complete", function(){
        browser.url('/');
        wait: 2000;
        let heading = $('#header_container');
        let txt = 'Checkout: Complete';
        let val = heading.getText();
        console.log(val.isEqual(txt));
        const Meaasage =$('#checkout_complete_container');
        let value = message.getText();
        let txt = 'THANK YOU FOR YOUR ORDER';
        console.log(value.isEqual(txt));
    })
})
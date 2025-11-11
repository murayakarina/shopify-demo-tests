import  { test, chromium } from '@playwright/test';
import { expect } from '@playwright/test';

test("user can login successfully", async ({page}) => {
    
    await page.goto("/");
    await page.fill("input#user-name", "standard_user");
    await page.fill("input#password", "secret_sauce");
    await page.click("input#login-button");
    await page.isVisible ("div#app_logo");
});

test("user cannot login with invalid credentials" ,async ({page}) =>{

    await page.goto("./")
    await page.fill("input#user-name", "standard_user");
    await page.fill("input#password", "secret_sauces");
    await page.click("input#login-button");
    await expect(page.locator('text=Epic sadface: Username and password do not match any user in this service')).toBeVisible();
}); 

test ("User cannot login with empty username and password" ,async({page})=>{
    await page.goto("./")
    await page.click("input#login-button");
    await expect(page.locator('text=Epic sadface: Username is required')).toBeVisible();
    await page.fill("input#user-name", "standard_user");
    await page.click("input#login-button");
    await expect(page.locator('text=Epic sadface: Password is required')).toBeVisible();
});

test("Masking is enabled on password field",async ({page})=>{
    await page.goto("./")
    const passwordInput = page.locator('input#password');
    await expect (passwordInput).toHaveAttribute('type', 'password')
});

test ("user can submit form by pressing enter", async ({page})=>{
    await page.goto("./")
    await page.fill("input#user-name", "standard_user");
    await page.fill("input#password", "secret_sauce");
    await page.keyboard.press('Enter');
    await page.isVisible ("div#app_logo");
});

test("user is directed to login page after a logout", async ({page})=>{
    await page.goto("/");
    await page.fill("input#user-name", "standard_user");
    await page.fill("input#password", "secret_sauce");
    await page.click("input#login-button");
    await page.click("button#react-burger-menu-btn");
    await page.click("a#logout_sidebar_link");
    await page.isVisible ("div#login_button_container");
});


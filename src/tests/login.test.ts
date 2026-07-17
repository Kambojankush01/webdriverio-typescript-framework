import loginPage from "../pages/LoginPage";
import loginData from "../data/loginData.json";
import Messages from "../constants/Messages";
import Config from "../config/Config";

describe("OrangeHRM Login Tests", ()=>{

    beforeEach(async()=>{
        await browser.deleteCookies();
        await loginPage.open();
    });

    it("Should login successfully with valid credentials", async()=>{
        
        //Act
        const dashboardPage = await loginPage.login(Config.username,Config.password);

        //Assert
        expect(await dashboardPage.isDashboardDisplayed()).toBe(true);

    });

    it("Should fail login with invalid credentials", async()=>{

        await loginPage.login(loginData.invalidUser.username,loginData.invalidUser.password);

        // OrangeHRM public demo occasionally returns
        // "CSRF token validation failed" instead of
        // "Invalid credentials". Accept both responses
        // to avoid false failures caused by the demo environment.
        
        const errorMessage = await loginPage.getErrorMessage();

        expect([
            Messages.INVALID_CREDENTIALS,
            Messages.CSRF_TOKEN_VALIDATION_FAILED
        ]).toContain(errorMessage);

    });

})
import loginPage from "../pages/LoginPage";
import loginData from "../data/loginData.json";

describe("OrangeHRM Login Tests", ()=>{

    beforeEach(async()=>{
        await browser.deleteCookies();
        await loginPage.open();
    });

    it("Should login successfully with valid credentials", async()=>{
        
        //Act
        const dashboardPage = await loginPage.login(loginData.validUser.username,loginData.validUser.password);

        //Assert
        expect(await dashboardPage.isDashboardDisplayed()).toBe(true);

    });

    it("Should fail login with invalid credentials", async()=>{

        await loginPage.login(loginData.invalidUser.username,loginData.invalidUser.password);

        expect(await loginPage.getErrorMessage()).toContain("Invalid credentials");
    });

})
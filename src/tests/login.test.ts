import loginPage from "../pages/LoginPage";
import {loginData} from "../data/loginData";

describe("OrangeHRM Login", ()=>{
    it("Should login successfully with valid credentials", async()=>{
        //Arrange
        await loginPage.open();

        //Act
        const dashboardPage = await loginPage.login(loginData.validUser.username,loginData.validUser.password);

        //Assert
        expect(await dashboardPage.isDashboardDisplayed()).toBe(true);
    })
})
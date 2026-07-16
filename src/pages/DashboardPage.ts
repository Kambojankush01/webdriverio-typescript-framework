import BasePage from "./BasePage";

class DashboardPage extends BasePage{

    // Locators
    private get dashboardHeading(){
        return $('//h6[text()="Dashboard"]');
    }

    // Business Methods

    public async isDashboardDisplayed(): Promise<boolean>{
        await this.dashboardHeading.waitForDisplayed();
        return await this.isDisplayed(this.dashboardHeading);
    }
}

export default new DashboardPage();

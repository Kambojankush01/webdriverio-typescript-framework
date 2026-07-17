
export default class BasePage{
    /**
     * Opens a relative path from the baseUrl
     * Example:
     * open('/login')
     */
    public async open(path:string): Promise<void>{
        console.log("BASE URL:", browser.options.baseUrl);
        console.log("PATH:", path);

        await browser.url(path);

        console.log("CURRENT URL:", await browser.getUrl());
    }

    // Click an element
    protected async click(element: ReturnType<typeof $>):Promise<void>{
        await element.waitForClickable({timeout:browser.options.waitforTimeout});
        await element.click();
    }

    // Enter text in input field
    protected async type(element: ReturnType<typeof $>,text:string):Promise<void>{
        await element.waitForDisplayed({timeout:browser.options.waitforTimeout});
        await element.clearValue();
        await element.setValue(text);
    }

    // Get Text from an element
    protected async getText(element:ReturnType<typeof $>):Promise<string>{
        await element.waitForDisplayed({timeout:browser.options.waitforTimeout});
        return await element.getText();
    }

    // Check if an element is displayed
    protected async isDisplayed(element: ReturnType<typeof $>):Promise<boolean>{
        return await element.isDisplayed();
    }

    // Wait until an element is displayed
    protected async waitForDisplayed(element: ReturnType<typeof $>):Promise<void>{
        await element.waitForDisplayed({timeout:browser.options.waitforTimeout});
    }

    // Wait until an element is clickable
    protected async waitForClickable(element: ReturnType<typeof $>):Promise<void>{
        await element.waitForClickable({timeout:browser.options.waitforTimeout});
    }

    // Wait until an element is no longer displayed
    protected async waitForNotDisplayed(element: ReturnType<typeof $>):Promise<void>{
        await element.waitForDisplayed({reverse:true,timeout:browser.options.waitforTimeout});
    }

    
}
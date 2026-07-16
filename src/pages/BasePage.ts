

export default class BasePage{
    /**
     * Opens a relative path from the baseUrl
     * Example:
     * open('/login')
     */
    protected async open(path:string): Promise<void>{
        await browser.url(path);
    }

    // Click an element
    protected async click(element: ReturnType<typeof $>):Promise<void>{
        await element.waitForClickable();
        await element.click();
    }

    // Enter text in input field
    protected async type(element: ReturnType<typeof $>,text:string):Promise<void>{
        await element.waitForDisplayed();
        await element.clearValue();
        await element.setValue(text);
    }

    // Get Text from an element
    protected async getText(element:ReturnType<typeof $>):Promise<string>{
        await element.waitForDisplayed();
        return await element.getText();
    }

    // Check if an element is displayed
    protected async isDisplayed(element: ReturnType<typeof $>):Promise<boolean>{
        return await element.isDisplayed();
    }

    
}
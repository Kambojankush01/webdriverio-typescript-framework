

export default class BasePage{
    /**
     * Opens a relative path from the baseUrl
     * Example:
     * open('/login')
     */
    public async open(path:string): Promise<void>{
        await browser.url(path);
    }

    
}
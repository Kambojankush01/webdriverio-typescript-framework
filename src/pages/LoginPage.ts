import BasePage from "./BasePage";

class LoginPage extends BasePage{

    //getters
    private get usernameInput(){
        return $('input[name = "username"]');
    }

    private get passwordInput(){
        return $('input[name="password"]');
    }

    private get loginButton(){
        return $('button[type="submit"]');
    }

    private get forgotPasswordLink(){
        return $('//p[text()="Forgot your password? "]');
    }

    private get errorMessage(){
        return $('.oxd-alert-content-text');
    }

    // business methods
    
    public async open(): Promise<void>{
        await super.open('/');
    }

    public async login(username:string,password:string): Promise<void>{
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    public async clickForgotPassword(): Promise<void>{
        await this.forgotPasswordLink.click();
    }

    public async getErrorMessage(): Promise<string>{
        return await this.errorMessage.getText();
    }

}

export default new LoginPage();
import BasePage from "./BasePage";
import DashboardPage from "./DashboardPage";

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
        await super.open('/web/index.php/auth/login');
    }

    public async login(username:string,password:string): Promise<typeof DashboardPage>{
        await this.type(this.usernameInput,username);
        await this.type(this.passwordInput,password);
        await this.click(this.loginButton);
        return DashboardPage;
    }

    public async clickForgotPassword(): Promise<void>{
        await this.click(this.forgotPasswordLink);
    }

    public async getErrorMessage(): Promise<string>{
        return await this.getText(this.errorMessage);
    }

}

export default new LoginPage();

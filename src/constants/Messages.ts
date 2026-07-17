export default class Messages{

    private constructor(){
        //Prevent instantiation
    }

    static readonly INVALID_CREDENTIALS = "Invalid credentials";
    static readonly CSRF_TOKEN_VALIDATION_FAILED = "CSRF token validation failed";
    
}
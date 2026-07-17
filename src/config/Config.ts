import dotenv from "dotenv";

dotenv.config();
console.log("BASE_URL:", process.env.BASE_URL);

export default class Config{

    private constructor(){}

    static readonly baseUrl = process.env.BASE_URL ?? "";
    static readonly username = process.env.USERNAME ?? "";
    static readonly password = process.env.PASSWORD ?? "";
    static readonly browser = process.env.BROWSER ?? "chrome";
    
    

}
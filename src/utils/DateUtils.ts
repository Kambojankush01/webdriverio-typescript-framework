export default class DateUtil{
    private constructor(){}

    static today(): string{
        return new Date().toLocaleDateString("en-CA");
    }

    static timestamp(): string{
        return Date.now().toString();
    }
}
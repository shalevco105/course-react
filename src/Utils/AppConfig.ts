class AppConfig {

	public readonly productsUrl = "http://localhost:3030/api/products/";
	public readonly registerUrl = "http://localhost:3030/api/register/";
	public readonly loginUrl = "http://localhost:3030/api/login/";

    public readonly chatGptUrl = "https://api.openai.com/v1/chat/completions";
    public readonly chatGptKey = "your-api-key-here";

}

export const appConfig = new AppConfig();

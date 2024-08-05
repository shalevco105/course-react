class AppConfig {

	public readonly moviesUrl = "http://localhost:3030/movie/";
	public readonly registerUrl = "http://localhost:3030/auth/register/";
	public readonly loginUrl = "http://localhost:3030/auth/login/";

	public readonly chatGptUrl = "https://api.openai.com/v1/chat/completions";
	public readonly chatGptKey = "your-api-key-here";

}

export const appConfig = new AppConfig();

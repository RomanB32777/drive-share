import { authTokens } from "../config/constants";
import { IAuthTokens, TAuthTokenTypes } from "../model/types";

class TokenService {
	setTokens(tokens: IAuthTokens): void {
		Object.entries(tokens).forEach(([key, value]) => {
			const tokenKey = authTokens[key as TAuthTokenTypes];

			localStorage.setItem(tokenKey, value);
		});
	}

	setToken(type: TAuthTokenTypes, value: string): void {
		localStorage.setItem(authTokens[type], value);
	}

	getToken(type: TAuthTokenTypes): string {
		const confirmToken = localStorage.getItem(authTokens[type]) ?? "";

		return confirmToken;
	}

	hasToken(type: TAuthTokenTypes): boolean {
		const token = localStorage.getItem(authTokens[type]);

		return Boolean(token);
	}

	deleteTokens(): void {
		Object.values(authTokens).forEach((tokenKey) => {
			localStorage.removeItem(tokenKey);
		});
	}
}

export const tokenService = new TokenService();

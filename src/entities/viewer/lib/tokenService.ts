import { CONFIRM_TOKEN, USER_TOKEN, authTokens } from "../config/constants";
import { IAuthTokens, TAuthTokenTypes } from "../model/types";

class TokenService {
	setTokens(tokens: IAuthTokens): void {
		localStorage.setItem(CONFIRM_TOKEN, tokens.confirmToken);
		localStorage.setItem(USER_TOKEN, tokens.userToken);
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
		localStorage.clear();
	}
}

export const tokenService = new TokenService();

export enum EHttpMethods {
	DELETE = "DELETE",
	GET = "GET",
	HEAD = "HEAD",
	PATCH = "PATCH",
	POST = "POST",
	PUT = "PUT",
}

// TODO определить тип данных, возвращаемых с бэка в том числе для отображения сообщений ошибок
export interface IPayloadActionData {
	status: number;
	data: unknown;
}

export interface IUserIdQueryParam {
	userId?: number;
}

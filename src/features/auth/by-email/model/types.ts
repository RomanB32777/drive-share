import { IViewer } from "entities/viewer";

export interface IAuthForm {
	onSuccess: (data: IViewer) => void;
}

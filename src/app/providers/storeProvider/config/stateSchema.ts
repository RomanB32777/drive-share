import { ICarsState } from "entities/car";
import { IViewer } from "entities/viewer";
import { rtkApi } from "shared/api";

export interface IStateSchema {
	viewer: IViewer;
	cars: ICarsState;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export type TStateSchemaKey = keyof IStateSchema;

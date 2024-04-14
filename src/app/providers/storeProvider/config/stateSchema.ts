import { ICarsState } from "entities/car";
import { IViewer } from "entities/viewer";
import { hhRtkApi, rtkApi } from "shared/api";

export interface IStateSchema {
	viewer: IViewer;
	cars: ICarsState;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
	[hhRtkApi.reducerPath]: ReturnType<typeof hhRtkApi.reducer>;
}

export type TStateSchemaKey = keyof IStateSchema;

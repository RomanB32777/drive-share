import { ICarsState } from "entities/car";
import { IRentsState } from "entities/rent";
import { IViewer } from "entities/viewer";
import { hhRtkApi, rtkApi } from "shared/api";

export interface IStateSchema {
	viewer: IViewer;
	cars: ICarsState;
	rents: IRentsState;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
	[hhRtkApi.reducerPath]: ReturnType<typeof hhRtkApi.reducer>;
}

export type TStateSchemaKey = keyof IStateSchema;

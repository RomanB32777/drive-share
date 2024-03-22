import { rtkApi } from "shared/api";

import { ICatalogState } from "./models";

export interface IStateSchema {
	catalog: ICatalogState;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export type TStateSchemaKey = keyof IStateSchema;

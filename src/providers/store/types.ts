import { rtkApi } from "shared/api";

import { ICarsState } from "./models";

export interface IStateSchema {
	cars: ICarsState;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}

export type TStateSchemaKey = keyof IStateSchema;

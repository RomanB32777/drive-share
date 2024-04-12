import { rtkApi } from "shared/api";

import { IViewer } from "../model/types";

const apiPath = "user";

export const viewerApi = rtkApi.enhanceEndpoints({ addTagTypes: ["viewer"] }).injectEndpoints({
	endpoints: (build) => ({
		fetchViewer: build.query<IViewer, string>({
			query: (id) => `${apiPath}/${id}`,
			providesTags: ["viewer"],
		}),
	}),
});

export const { useFetchViewerQuery, useLazyFetchViewerQuery } = viewerApi;

import { EHttpMethods, adapterFormData, rtkApi } from "shared/api";

import { IViewer, TViewerProfile } from "../model/types";

const apiPath = "todos";

export const viewerApi = rtkApi.enhanceEndpoints({ addTagTypes: ["viewer"] }).injectEndpoints({
	endpoints: (build) => ({
		fetchViewer: build.query<IViewer, string>({
			query: (id) => `${apiPath}/${id}`,
			providesTags: ["viewer"],
		}),
		updateViewer: build.mutation<IViewer, Partial<TViewerProfile>>({
			query: (data) => ({
				url: apiPath,
				method: EHttpMethods.PUT,
				body: adapterFormData(data),
			}),
		}),
	}),
});

export const { useFetchViewerQuery, useLazyFetchViewerQuery, useUpdateViewerMutation } = viewerApi;

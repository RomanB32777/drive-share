import { EHttpMethods, adapterFormData, rtkApi } from "shared/api";

import { IVewerDocuments, IViewer, TViewerProfile } from "../model/types";

const apiPath = "viewer";

export const viewerApi = rtkApi.enhanceEndpoints({ addTagTypes: ["viewer"] }).injectEndpoints({
	endpoints: (build) => ({
		fetchViewer: build.query<IViewer, string>({
			query: (id) => `${apiPath}/${id}`,
			providesTags: ["viewer"],
		}),
		fetchViewerDocuments: build.query<IVewerDocuments, number>({
			query: (userId) => `${apiPath}/${userId}/documents`,
			providesTags: ["viewer"],
		}),
		updateViewer: build.mutation<IViewer, Partial<TViewerProfile>>({
			query: (data) => ({
				url: apiPath,
				method: EHttpMethods.PUT,
				body: adapterFormData(data),
			}),
		}),
		uploadViewerDocuments: build.mutation<IVewerDocuments, Partial<IVewerDocuments>>({
			query: (data) => ({
				url: `${apiPath}/documents`,
				method: EHttpMethods.PUT,
				body: adapterFormData(data),
			}),
		}),
	}),
});

export const {
	useFetchViewerQuery,
	useLazyFetchViewerQuery,
	useFetchViewerDocumentsQuery,
	useLazyFetchViewerDocumentsQuery,
	useUpdateViewerMutation,
	useUploadViewerDocumentsMutation,
} = viewerApi;

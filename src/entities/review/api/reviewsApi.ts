import { EHttpMethods, rtkApi } from "shared/api";

import { IReview, IReviewFormData } from "../model/types";

const reviewsApiPath = "review";

export const reviewsApi = rtkApi.enhanceEndpoints({ addTagTypes: ["reviews"] }).injectEndpoints({
	endpoints: (build) => ({
		fetchReviews: build.query<IReview[], number>({
			query: (carId) => ({
				url: `${reviewsApiPath}/${carId}`,
			}),
			providesTags: ["reviews"],
		}),
		createReview: build.mutation<IReview, IReviewFormData>({
			query: (data) => ({
				url: `${reviewsApiPath}/new`,
				method: EHttpMethods.POST,
				body: data,
			}),
			invalidatesTags: ["reviews"],
		}),
	}),
});

export const { useFetchReviewsQuery, useLazyFetchReviewsQuery, useCreateReviewMutation } =
	reviewsApi;

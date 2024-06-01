export {
	useFetchCarsQuery,
	useLazyFetchCarsQuery,
	useFetchCarQuery,
	useFetchCategoriesQuery,
	useFetchAreasQuery,
	useFetchIncomeCarsQuery,
	useFetchFavoritesCarsQuery,
	useCreateCarMutation,
	useEditCarMutation,
	useDeleteCarMutation,
	useAddToFavoritesMutation,
} from "./api/carsApi";

export {
	type ICarParameters,
	type ICarRentTerms,
	type ICarAddress,
	type ICarPrice,
	type ICarInsurance,
	type ICar,
	type TCarKeys,
	type ICarCategory,
	type ICarIncome,
	type ICarsQueryParams,
	type TPeriodFilterValues,
	type ICarsState,
	type TCarCreateForm,
	type ICarCardBaseProps,
	type TCarFormTypes,
	type ICarFormPathParams,
} from "./model/types";
export { carsActions, carsReducer } from "./model/carsSlice";
export { selectCars, selectCar } from "./model/selectors";

export { CarCard } from "./ui/car-card";
export { IncomeCard } from "./ui/income-card";
export { CategoryCard } from "./ui/category-card";
export { CarRating } from "./ui/car-rating";

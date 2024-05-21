export {
	useFetchCarsQuery,
	useLazyFetchCarsQuery,
	useFetchCarQuery,
	useFetchCategoriesQuery,
	useCreateRentMutation,
	useFetchAreasQuery,
	useFetchIncomeCarsQuery,
} from "./api/carsApi";

export { type ICarsQueryParams, type IRentData } from "./api/types";

export { type ICar, type ICarCategory, type ICarIncome, type ICarsState } from "./model/types";
export { carsActions, carsReducer } from "./model/carsSlice";
export { selectCars, selectCar } from "./model/selectors";

export { CarCard } from "./ui/car-card";
export { IncomeCard } from "./ui/income-card";
export { CategoryCard } from "./ui/category-card";
export { Rating as CarRating } from "./ui/rating";

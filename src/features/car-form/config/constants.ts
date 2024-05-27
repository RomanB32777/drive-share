import carFrontImage from "shared/assets/images/car_ front.png";
import car34Image from "shared/assets/images/car_3_4.png";
import carLeftImage from "shared/assets/images/car_left.png";
import carRightImage from "shared/assets/images/car_right.png";

export const mileageItems: string[] = [
	"< 50 тыс. км",
	"< 100 тыс. км",
	"< 200 тыс. км",
	"> 200 тыс. км",
];

export const transmissionItems: string[] = ["Механическая", "Автоматическая"];
export const wheelPositionItems: string[] = ["Руль слева", "Руль справа", "Руль посередине"];
export const insuranceItems: string[] = ["Без страховки", "Мультидрайв", "Впишу в полис"];

export const carExampleImages: Array<{ src: string; name: string }> = [
	{ src: car34Image, name: "Фото 3/4" },
	{ src: carRightImage, name: "Правая сторона" },
	{ src: carFrontImage, name: "Фото спереди" },
	{ src: carLeftImage, name: "Левая сторона" },
];

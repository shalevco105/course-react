import { RegisterOptions } from "react-hook-form";

export class ProductModel {
	public id: number;
    public name: string;
    public price: number;
    public stock: number;
    public imageUrl: string;
    public image: File;

    public static nameValidation: RegisterOptions = {
        required: { value: true, message: "Missing name." },
        minLength: { value: 2, message: "Name too short."},
        maxLength: { value: 100, message: "Name too long."}
    };

    public static priceValidation: RegisterOptions = {
        required: { value: true, message: "Missing price." },
        min: { value: 0, message: "Price can't be negative."},
        max: { value: 1000, message: "Price can't exceed 1000."}
    };

    public static stockValidation: RegisterOptions = {
        required: { value: true, message: "Missing stock." },
        min: { value: 0, message: "Stock can't be negative."},
        max: { value: 1000, message: "Stock can't exceed 1000."}
    };

    public static imageValidation: RegisterOptions = {
        required: { value: true, message: "Missing image." }
    };

}


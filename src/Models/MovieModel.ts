import { RegisterOptions } from "react-hook-form";

export class MovieModel {
    public externalId: number;
    public name: string;
    public length: string;
    public imageUrl: string;
    public price: number;

    public static nameValidation: RegisterOptions = {
        required: { value: true, message: "Missing name." },
        minLength: { value: 2, message: "Name too short." },
        maxLength: { value: 100, message: "Name too long." }
    };

    public static lengthValidation: RegisterOptions = {
        required: { value: true, message: "Missing length." },
        minLength: { value: 2, message: "Length too short." },
        maxLength: { value: 100, message: "Length too long." }
    };

    public static priceValidation: RegisterOptions = {
        required: { value: true, message: "Missing price." },
        min: { value: 0, message: "Price can't be negative." },
        max: { value: 1000, message: "Price can't exceed 1000." }
    };

    public static imageValidation: RegisterOptions = {
        required: { value: true, message: "Missing image." }
    };
}


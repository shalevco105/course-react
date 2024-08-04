import { RegisterOptions } from "react-hook-form";

export class MovieModel {
    public externalId: number;
    public movie_name: string;
    public movie_length: string;
    public movie_picUrl: string;

    public static nameValidation: RegisterOptions = {
        required: { value: true, message: "Missing name." },
        minLength: { value: 2, message: "Name too short." },
        maxLength: { value: 100, message: "Name too long." }
    };

    public static imageValidation: RegisterOptions = {
        required: { value: true, message: "Missing image." }
    };

}


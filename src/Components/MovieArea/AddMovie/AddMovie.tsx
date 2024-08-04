import { useForm } from "react-hook-form";
import "./AddMovie.css";
import { MovieModel } from "../../../Models/MovieModel";
import { movieService } from "../../../Services/MovieService";
import { notify } from "../../../Utils/notify";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../../../Utils/UseTitle";

export function AddMovie(): JSX.Element {

    useTitle("Northwind Add Movie");

    const { register, handleSubmit, formState, setValue } = useForm<MovieModel>();
    const navigate = useNavigate();

    async function send(movie: MovieModel) {
        try {
            // movie.image = (movie.image as unknown as FileList)[0];
            await movieService.addMovie(movie);
            notify.success("Movie has been added.");
            navigate("/movies");
        }
        catch (err: any) {
            notify.error(err);
        }
    }

    return (
        <div className="AddMovie">

            <form onSubmit={handleSubmit(send)}>

                <label>Name: </label>
                <input type="text" {...register("movie_name", MovieModel.nameValidation)} />
                <span className="error">{formState.errors?.movie_name?.message}</span>

                <label>Price: </label>
                <input type="number" {...register("movie_length")} />
                <span className="error">{formState.errors?.movie_length?.message}</span>

                <label>Image: </label>
                <input type="file" {...register("movie_picUrl", MovieModel.imageValidation)} />
                <span className="error">{formState.errors?.movie_picUrl?.message}</span>

                <button>Add</button>

            </form>
        </div>
    );
}

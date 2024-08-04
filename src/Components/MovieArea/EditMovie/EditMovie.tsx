import { useForm } from "react-hook-form";
import { MovieModel } from "../../../Models/MovieModel";
import "./EditMovie.css";
import { useNavigate, useParams } from "react-router-dom";
import { movieService } from "../../../Services/MovieService";
import { notify } from "../../../Utils/notify";
import { useEffect } from "react";

export function EditMovie(): JSX.Element {

    const { register, handleSubmit, formState, setValue } = useForm<MovieModel>();
    const navigate = useNavigate();
    const params = useParams();
    const externalId = +params.prodId;

    useEffect(() => {
        movieService.getOneMovie(externalId)
            .then(movie => {
                setValue("name", movie.name);
                setValue("length", movie.length);
                setValue("price", movie.price);
                setValue("movie_picUrl", movie.picUrl);
            })
            .catch(err => notify.error(err));
    }, []);

    async function send(movie: MovieModel) {
        try {
            movie.externalId = externalId;
            movie.movie_picUrl = (movie.movie_picUrl as unknown as FileList)[0].toString();
            await movieService.updateMovie(movie);
            notify.success("Movie has been updated.");
            navigate("/movies");
        }
        catch (err: any) {
            notify.error(err);
        }
    }

    return (
        <div className="EditMovie">
            <form onSubmit={handleSubmit(send)}>
                <label>Name: </label>
                <input type="text" {...register("name", MovieModel.nameValidation)} />
                <span className="error">{formState.errors?.name?.message}</span>

                <label>Length: </label>
                <input type="number" {...register("length")} />
                <span className="error">{formState.errors?.length?.message}</span>

                <label>Price: </label>
                <input type="number" {...register("price")} />
                <span className="error">{formState.errors?.price?.message}</span>

                <label>Image: </label>
                <input type="file" {...register("movie_picUrl")} />
                <span className="error">{formState.errors?.picUrl?.message}</span>

                <button>Update</button>
            </form>
        </div>
    );
}

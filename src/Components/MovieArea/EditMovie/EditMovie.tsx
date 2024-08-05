import { useForm } from "react-hook-form";
import { MovieModel } from "../../../Models/MovieModel";
import { useNavigate, useParams } from "react-router-dom";
import { movieService } from "../../../Services/MovieService";
import { notify } from "../../../Utils/notify";
import { useEffect } from "react";
import { TextField, Button, Typography, Box, Container } from "@mui/material";
import "./EditMovie.css";

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
                setValue("imageUrl", movie.imageUrl);
            })
            .catch(err => notify.error(err));
    }, [externalId, setValue]);

    async function send(movie: MovieModel) {
        try {
            movie.externalId = externalId;
            await movieService.updateMovie(movie);
            notify.success("Movie has been updated.");
            navigate("/movies");
        }
        catch (err: any) {
            notify.error(err);
        }
    }

    return (
        <Container maxWidth="sm" className="EditMovie">
            <Typography gutterBottom sx={{ fontSize: '2rem' }}>
                Edit Movie: {externalId}
            </Typography>
            <form onSubmit={handleSubmit(send)}>
                <Box mb={2}>
                    <TextField
                        fullWidth
                        label="Name"
                        variant="outlined"
                        {...register("name", MovieModel.nameValidation)}
                        error={!!formState.errors.name}
                        helperText={formState.errors?.name?.message}
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        fullWidth
                        label="Length"
                        variant="outlined"
                        {...register("length", MovieModel.lengthValidation)}
                        error={!!formState.errors.length}
                        helperText={formState.errors?.length?.message}
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        fullWidth
                        label="Price"
                        type="number"
                        variant="outlined"
                        {...register("price")}
                        error={!!formState.errors.price}
                        helperText={formState.errors?.price?.message}
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        fullWidth
                        label="Image URL"
                        variant="outlined"
                        {...register("imageUrl")}
                        error={!!formState.errors.imageUrl}
                        helperText={formState.errors?.imageUrl?.message}
                    />
                </Box>
                <Button type="submit" variant="contained" color="primary">
                    Update
                </Button>
            </form>
        </Container>
    );
}

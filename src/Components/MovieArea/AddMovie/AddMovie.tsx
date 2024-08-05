import { useForm } from "react-hook-form";
import "./AddMovie.css";
import { MovieModel } from "../../../Models/MovieModel";
import { movieService } from "../../../Services/MovieService";
import { notify } from "../../../Utils/notify";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../../../Utils/UseTitle";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

export function AddMovie(): JSX.Element {

    useTitle("Shalev's App Add Movie");

    const { register, handleSubmit, formState } = useForm<MovieModel>();
    const navigate = useNavigate();

    async function send(movie: MovieModel) {
        try {
            await movieService.addMovie(movie);
            notify.success("Movie has been added.");
            navigate("/movies");
        }
        catch (err: any) {
            notify.error(err);
        }
    }


    return (
        <Container maxWidth="sm" className="AddMovie">
            <Typography gutterBottom sx={{ fontSize: '2rem' }}>
                Add New Movie
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
                    CREATE
                </Button>
            </form>
        </Container>
    );
}

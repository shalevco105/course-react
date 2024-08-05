import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { movieService } from "../../../Services/MovieService";
import { MovieModel } from "../../../Models/MovieModel";
import { notify } from "../../../Utils/notify";
import { Button, Typography, Card, CardContent, CardMedia, Grid, Box } from "@mui/material";
import { NavLink } from "react-router-dom";
import "./MovieDetails.css";

export function MovieDetails(): JSX.Element {
    const params = useParams();
    const externalId = +params.prodId;

    const [movie, setMovie] = useState<MovieModel>();
    const navigate = useNavigate();

    useEffect(() => {
        movieService.getOneMovie(externalId)
            .then(dbMovie => setMovie(dbMovie))
            .catch(err => notify.error(err));
    }, [externalId]);

    async function deleteMe() {
        try {
            await movieService.deleteMovie(externalId);
            notify.success("Movie has been deleted.");
            navigate("/movies");
        }
        catch (err: any) {
            notify.error(err);
        }
    }

    return (
        <div className="movie-details-container">
            <Card className="movie-card">
                <CardContent>
                    <Typography gutterBottom sx={{ fontSize: '2rem' }} className="movie-title">
                        {movie?.name}
                    </Typography>
                    <Typography variant="h6" className="movie-length">
                        Length: {movie?.length}
                    </Typography>
                    <Typography variant="h6" className="movie-price">
                        Price: {movie?.price}$
                    </Typography>
                    <Box className="movie-media">
                        <CardMedia
                            component="img"
                            image={movie?.imageUrl}
                            alt={movie?.name}
                        />
                    </Box>
                </CardContent>
                <Grid container spacing={2} className="action-buttons">
                    <Grid item className="button-item">
                        <Button
                            component={NavLink}
                            to="/movies"
                            variant="contained"
                            color="primary"
                        >
                            Back
                        </Button>
                    </Grid>
                    <Grid item className="button-item">
                        <Button
                            component={NavLink}
                            to={"/movies/edit/" + movie?.externalId}
                            variant="contained"
                            color="secondary"
                        >
                            Edit
                        </Button>
                    </Grid>
                    <Grid item className="button-item">
                        <Button
                            variant="contained"
                            color="error"
                            onClick={deleteMe}
                        >
                            Delete
                        </Button>
                    </Grid>
                </Grid>
            </Card>
        </div>
    );
}

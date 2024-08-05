import { useForm } from "react-hook-form";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import "./Register.css";
import { UserModel } from "../../../Models/UserModel";
import { notify } from "../../../Utils/notify";
import { userService } from "../../../Services/UserService";
import { useNavigate } from "react-router-dom";

export function Register(): JSX.Element {
    const { register, handleSubmit } = useForm<UserModel>();
    const navigate = useNavigate();

    async function send(user: UserModel) {
        try {
            await userService.register(user);
            notify.success("Welcome " + user.username);
            navigate("/home");
        } catch (err: any) {
            notify.error(err);
        }
    }

    return (
        <Container maxWidth="sm">
            <Box
                component="form"
                onSubmit={handleSubmit(send)}
                sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}
            >
                <Typography gutterBottom sx={{ fontSize: '2rem' }}>
                    Register
                </Typography>

                <TextField
                    label="Username"
                    {...register("username")}
                    fullWidth
                    required
                />
                <TextField
                    label="Fullname"
                    {...register("fullname")}
                    fullWidth
                    required
                />
                <TextField
                    label="Age"
                    {...register("age")}
                    fullWidth
                    required
                />
                <TextField
                    label="Email"
                    type="email"
                    {...register("email")}
                    fullWidth
                    required
                />
                <TextField
                    label="Password"
                    type="password"
                    {...register("password")}
                    fullWidth
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Register
                </Button>
            </Box>
        </Container>
    );
}

import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { userService } from "../../../Services/UserService";
import { notify } from "../../../Utils/notify";
import { CredentialsModel } from "../../../Models/CredentialsModel";
import { store } from "../../../Redux/store";
import { TextField, Button, Typography, Box } from "@mui/material";


export function Login(): JSX.Element {
    const { register, handleSubmit, formState: { errors } } = useForm<CredentialsModel>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<CredentialsModel> = async (credentials) => {
        try {
            await userService.login(credentials);
            notify.success("Welcome back " + store.getState().user.fullname);
            navigate("/home");
        } catch (err: any) {
            notify.error(err.message);
        }
    };

    return (
        <Box className="Login" component="form" onSubmit={handleSubmit(onSubmit)}
            noValidate sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 4 }}>
            <Typography gutterBottom sx={{ fontSize: '2rem' }}>
                Login
            </Typography>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                type="email"
                {...register("email", { required: "Email is required" })}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
            />
            <TextField
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                type="password"
                {...register("password", { required: "Password is required" })}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Login
            </Button>
        </Box>
    );
}

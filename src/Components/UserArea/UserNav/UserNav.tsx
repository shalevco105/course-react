import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import './UserNav.css';
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/store";
import { UserModel } from "../../../Models/UserModel";
import { userService } from "../../../Services/UserService";
import { notify } from "../../../Utils/notify";


export function UserNav(): JSX.Element {
    const user = useSelector<AppState, UserModel>(store => store.user);

    function logout() {
        userService.logout();
        notify.success("bye bye...");
    }

    return (
        <AppBar position="static" className="navbar">
            <Toolbar className="toolbar">
                <Typography variant="h6" className="title">
                    Shalev's Movies
                </Typography>
                <div className="nav-links">
                    {
                        !user && <>
                            <Typography className='hello'>
                                HELLO GUEST
                            </Typography>
                            |
                            <Button color="inherit" href="/register">Register</Button>|
                            <Button color="inherit" href="/login">Login</Button>
                        </>
                    }
                    {
                        user &&
                        <>
                            <Typography className='hello'>
                                HELLO {user.fullname}
                            </Typography> |
                            <Button color="inherit" onClick={logout}>Logout</Button>
                        </>

                    }
                </div>
            </Toolbar>
        </AppBar>
    );
};


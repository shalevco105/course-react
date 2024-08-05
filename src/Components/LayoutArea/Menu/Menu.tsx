import { NavLink } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";
import { TotalMovies } from "../../MovieArea/TotalMovies/TotalMovies";
import "./Menu.css";

export function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <List>
                <ListItem component={NavLink} to="/home">
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem component={NavLink} to="/movies" end>
                    <ListItemText primary="Movies" />
                </ListItem>
                <ListItem component={NavLink} to="/movies/new">
                    <ListItemText primary="Add Movie" />
                </ListItem>
                <ListItem component={NavLink} to="/about">
                    <ListItemText primary="About" />
                </ListItem>
                <ListItem component={NavLink} to="/contact-us">
                    <ListItemText primary="Contact Us" />
                </ListItem>
            </List>

            <TotalMovies />
        </div>
    );
}

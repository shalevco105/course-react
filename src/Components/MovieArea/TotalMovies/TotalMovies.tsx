import { AppState } from "../../../Redux/store";
import "./TotalMovies.css";
import { useSelector } from "react-redux";

export function TotalMovies(): JSX.Element {

    const count = useSelector<AppState, number>(store => store.movies.length);

    return (
        <div className="TotalMovies">
            <span>Total Movies: {count}</span>
        </div>
    );
}

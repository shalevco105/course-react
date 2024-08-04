import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import { Home } from "../../HomeArea/Home/Home";
import { MovieList } from "../../MovieArea/MovieList/MovieList";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { Suspense, lazy } from "react";
import { MovieDetails } from "../../MovieArea/MovieDetails/MovieDetails";
import { AddMovie } from "../../MovieArea/AddMovie/AddMovie";
import { EditMovie } from "../../MovieArea/EditMovie/EditMovie";
import { Register } from "../../UserArea/Register/Register";
import { Login } from "../../UserArea/Login/Login";
import { ContactUs } from "../../AboutArea/ContactUs/ContactUs";

export function Routing(): JSX.Element {

    const LazyAbout = lazy(() => import("../../AboutArea/About/About"));

    const suspenseAbout = <Suspense> <LazyAbout /> </Suspense>

    return (
        <div className="Routing">
			<Routes>
                <Route path="/home" element={<Home />} />

                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                <Route path="/movies" element={<MovieList />} />
                <Route path="/movies/details/:prodId" element={<MovieDetails />} />
                <Route path="/movies/new" element={<AddMovie />} />
                <Route path="/movies/edit/:prodId" element={<EditMovie />} />

                <Route path="/about" element={suspenseAbout} />
                <Route path="/contact-us" element={<ContactUs />} />

                <Route path="/" element={<Navigate to="/home" />} />

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

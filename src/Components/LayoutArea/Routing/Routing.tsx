import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import { Home } from "../../HomeArea/Home/Home";
import { ProductList } from "../../ProductArea/ProductList/ProductList";
import { PageNotFound } from "../PageNotFound/PageNotFound";
import { Suspense, lazy } from "react";
import { ProductDetails } from "../../ProductArea/ProductDetails/ProductDetails";
import { AddProduct } from "../../ProductArea/AddProduct/AddProduct";
import { EditProduct } from "../../ProductArea/EditProduct/EditProduct";
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

                <Route path="/products" element={<ProductList />} />
                <Route path="/products/details/:prodId" element={<ProductDetails />} />
                <Route path="/products/new" element={<AddProduct />} />
                <Route path="/products/edit/:prodId" element={<EditProduct />} />

                <Route path="/about" element={suspenseAbout} />
                <Route path="/contact-us" element={<ContactUs />} />

                <Route path="/" element={<Navigate to="/home" />} />

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

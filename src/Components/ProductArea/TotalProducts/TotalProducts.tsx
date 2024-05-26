import { useEffect, useState } from "react";
import { AppState, store } from "../../../Redux/store";
import "./TotalProducts.css";
import { useSelector } from "react-redux";

export function TotalProducts(): JSX.Element {

    const count = useSelector<AppState, number>(store => store.products.length);

    return (
        <div className="TotalProducts">
            <span>Total Products: {count}</span>
        </div>
    );
}

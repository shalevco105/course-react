import { useEffect, useState } from "react";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import "./ProductList.css";
import { ProductCard } from "../ProductCard/ProductCard";
import { notify } from "../../../Utils/notify";
import { useTitle } from "../../../Utils/UseTitle";

export function ProductList(): JSX.Element {

    useTitle("Northwind Products");

    const [products, setProducts] = useState<ProductModel[]>([]);

    useEffect(() => {

        productService.getAllProducts()
            .then(dbProducts => setProducts(dbProducts))
            .catch(err => notify.error(err));
    }, []);

    return (
        <div className="ProductList">
            {products.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
    );
}

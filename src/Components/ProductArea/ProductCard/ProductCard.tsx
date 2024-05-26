import { useNavigate, useParams } from "react-router-dom";
import { ProductModel } from "../../../Models/ProductModel";
import "./ProductCard.css";

type ProductCardProps = {
	product: ProductModel;
};

export function ProductCard(props: ProductCardProps): JSX.Element {

    const navigate = useNavigate();

    function displayDetails() {
        navigate("/products/details/" + props.product.id);
    }

    return (
        <div className="ProductCard" onClick={displayDetails}>
			<div>
                {props.product.name} <br />
                Price: {props.product.price} <br />
                Stock: {props.product.stock}
            </div>
            <div>
                <img src={props.product.imageUrl} />
            </div>
        </div>
    );
}

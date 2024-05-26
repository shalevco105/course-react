import { ChangeEvent, useState } from "react";
import "./Vat.css";
import { monetaryService } from "../../../Services/MonetaryService";



export function Vat(): JSX.Element {

    const percent = 17;
    const [price, setPrice] = useState<number>(0);
    const [vat, setVat] = useState<number>(0);

    function handleChange(args: ChangeEvent<HTMLInputElement>) {
        const price = +args.target.value;
        setPrice(price);
        const vat = monetaryService.getVat(price, percent);
        setVat(vat);
    }

    return (
        <div className="Vat">

            <h4>VAT Calculator</h4>

            <label>Price: </label>
            <input type="number" onChange={handleChange} value={price} placeholder="price" />

            <p data-testid="resultParagraph">{price} x {percent}% = {vat}</p>
			
        </div>
    );
}

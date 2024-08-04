import { ChangeEvent, useState } from "react";
import "./Vat.css";
import { monetaryService } from "../../../Services/MonetaryService";



export function Vat(): JSX.Element {

    const percent = 17;
    const [length, setLength] = useState<number>(0);
    const [vat, setVat] = useState<number>(0);

    function handleChange(args: ChangeEvent<HTMLInputElement>) {
        const length = +args.target.value;
        setLength(length);
        const vat = monetaryService.getVat(length, percent);
        setVat(vat);
    }

    return (
        <div className="Vat">

            <h4>VAT Calculator</h4>

            <label>Length: </label>
            <input type="number" onChange={handleChange} value={length} placeholder="length" />

            <p data-testid="resultParagraph">{length} x {percent}% = {vat}</p>
			
        </div>
    );
}

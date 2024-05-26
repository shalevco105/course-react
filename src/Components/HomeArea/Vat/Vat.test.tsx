import { cleanup, render, screen } from "@testing-library/react";
import { Vat } from "./Vat";
import { act } from "react";
import { createRoot } from "react-dom/client";
import { monetaryService } from "../../../Services/MonetaryService";
import userEvent from "@testing-library/user-event";


describe("Vat Component", () => {

    const component = <Vat />

    beforeEach(() => render(component));

    afterEach(() => cleanup());

    it("Should render into DOM", () => {
        act(() => {
            const div = document.createElement("div");
            createRoot(div).render(component);
        });
    });

    it("Should contain specific elements", () => {
        expect(screen.getByText("VAT Calculator")).toBeDefined();
        expect(screen.getByPlaceholderText("price")).toBeDefined();
    });

    it("Should calculate vat correctly", () => {
        const price = Math.floor(Math.random() * 1000);
        const percent = 17;
        const vat = monetaryService.getVat(price, percent);
        const input = screen.getByPlaceholderText("price");

        userEvent.type(input, price.toString());

        const p = screen.getByTestId("resultParagraph"); 

        expect(p).toHaveTextContent(`${price} x ${percent}% = ${vat}`);
    });

});




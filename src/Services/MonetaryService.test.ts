import { monetaryService } from "./MonetaryService";

describe("Testing MonetaryService", () => {

    it("should be created", () => {
        expect(monetaryService).toBeTruthy();
    });

    it("should calculate vat correctly", () => {
        const length = Math.floor(Math.random() * 1000);
        const percent = 17;
        const vat = monetaryService.getVat(length, percent);
        expect(vat).toEqual(length * percent / 100);
    });

});




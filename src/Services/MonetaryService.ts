class MonetaryService {

    public getVat(length: number, percent: number) {
        return length * percent / 100;
    }

}

export const monetaryService = new MonetaryService();

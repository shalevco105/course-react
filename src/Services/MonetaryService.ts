class MonetaryService {
	
    public getVat(price: number, percent: number) { 
        return price * percent / 100;
    }

}

export const monetaryService = new MonetaryService();

import { Notyf } from "notyf";

class Notify {
	
    public notyf = new Notyf({ 
        duration: 3000, 
        position: { x: "center", y: "top" },
        dismissible: true
    });

    public success(message: string) {
        this.notyf.success(message);
    }

    public error(err: any) {
        const message = this.extractMessage(err);
        this.notyf.error(message);
    }

    private extractMessage(err: any) {
        if(typeof err === "string") return err;
        if(typeof err?.response?.data === "string") return err.response.data;
        if(typeof err.message === "string") return err.message;
        return "Unknown error, please try again.";
    }

}

export const notify = new Notify();

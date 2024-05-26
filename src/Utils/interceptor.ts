import axios from "axios";

class Interceptor {
	
    public createInterceptor() {

        axios.interceptors.request.use(requestObject => {
            requestObject.headers.Authorization = "Bearer " + localStorage.getItem("token");
            return requestObject;
        });
        
    }

}

export const interceptor = new Interceptor();

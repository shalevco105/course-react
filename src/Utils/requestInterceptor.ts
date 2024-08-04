import axios from "axios";

class RequestInterceptor {
	
    public createRequestInterceptor() {
        axios.interceptors.request.use(requestObject => {
            requestObject.headers.Authorization = localStorage.getItem("token");
            return requestObject;
        });
        
    }

}

export const requestInterceptor = new RequestInterceptor();

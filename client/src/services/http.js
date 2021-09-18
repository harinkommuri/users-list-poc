import axios from "axios";

class HttpService {
    baseUrl = "https://jsonplaceholder.typicode.com";

    get(endPoint) {
        const reqUrl = `${this.baseUrl}/${endPoint}`;
        return axios.get(reqUrl).then(response => {
            return response.data;
        }).catch(error => {
            return error;
        });
    }
}

export default new HttpService();
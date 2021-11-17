import axios from "axios";

/**
 * Hàm config axios
 * CreatedBy: TPHung(17/11/2021)
 */
const axiosConfig = () => {
    axios.defaults.baseURL = "https://localhost:44371/api/v1/";
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
}

export default axiosConfig;
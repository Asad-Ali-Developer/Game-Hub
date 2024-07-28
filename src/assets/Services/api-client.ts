import axios from "axios";

export default axios.create({
    baseURL : 'https://api.rawg.io/api',
    params : {
        key : '3c88b21b8cde453aa4889c9f23128a8c'
    }
})
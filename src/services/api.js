import axios from "axios";
import {BaseUrl} from "../helpers/settings";

export default axios.create({
    baseURL: `http://127.0.0.1:80/api`,
});
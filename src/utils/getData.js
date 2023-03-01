import axios from "axios";
import { Data } from "./Data";

export async function getData(url, setData) {
    const response = await axios.get(url);
    console.log(response.data.data);
    const formattedData = new Data(response.data.data);
    setData(formattedData);
}
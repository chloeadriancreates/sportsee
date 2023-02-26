import axios from "axios";

export async function getData(url, setData) {
    const response = await axios.get(url);
    setData(response.data);
}
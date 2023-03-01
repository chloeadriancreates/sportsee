import axios from "axios";
import { User } from "./User";

/**
 * Fetches data from provided URL.
 * @function
 * @param {string} url - The URL where the data is located.
 * @param {callback} setData - The update function of the useState variable the data needs to be assigned to.
 */

export async function getData(url, setData) {
    const response = await axios.get(url);
    console.log(response.data.data);
    const formattedData = new User(response.data.data);
    setData(formattedData);
}
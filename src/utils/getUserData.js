import axios from "axios";
import { User } from "./User";

/**
 * Fetches data from provided URL.
 * @function
 * @param {string} id - The ID of the user.
 * @param {callback} setUser - The update function of the useState variable the data will be assigned to.
 */

export async function getUserData(id, setUser) {
    const formattedUser = new User();

    const mainResponse = await axios.get(`http://localhost:3000/user/${id}`);
    formattedUser.setName(mainResponse.data.data.userInfos.firstName);
    formattedUser.setOverview(mainResponse.data.data.keyData);

    const activityResponse = await axios.get(`http://localhost:3000/user/${id}/activity`);
    formattedUser.setPastWeek(activityResponse.data.data.sessions);
    console.log(activityResponse.data.data);

    setUser(formattedUser);
}
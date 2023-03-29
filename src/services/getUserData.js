import axios from "axios";
import { User } from "../classes/User";

/**
 * Fetches data from provided URL.
 * @function
 * @param {string} id - The ID of the user.
 */

export async function getUserData(id) {
    let mainUrl;
    let activityUrl;

    if(id === "12" || id === "18") {
        mainUrl = `http://localhost:3000/user/${id}`;
        activityUrl = `http://localhost:3000/user/${id}/activity`;
    } else {
        mainUrl = "http://localhost:3001/mockUser.json";
        activityUrl = "http://localhost:3001/mockActivity.json";
    }

    const formattedUser = new User();

    try {
        const mainResponse = await axios.get(mainUrl);
        formattedUser.setName(mainResponse.data.data.userInfos.firstName);
        formattedUser.setOverview(mainResponse.data.data.keyData);

        const activityResponse = await axios.get(activityUrl);
        formattedUser.setPastWeek(activityResponse.data.data.sessions);

        console.log(formattedUser);

        return formattedUser;
    } catch(error) {
        console.log(error);
    }
}
import axios from "axios";
import { User } from "../classes/User";

/**
 * Fetches user data from back-end and assigns it to a new instance of the User class.
 * @function
 * @param {string} id - The ID of the user.
*/

export async function getUserData(id) {
    const connectedBaseUrl = `http://localhost:3000/user`;
    const disconnectedBaseUrl = `http://localhost:3001`;
    let mainUrl;
    let activityUrl;
    let averageSessionUrl;
    let performanceUrl;

    if(id === "12" || id === "18") {
        mainUrl = `${connectedBaseUrl}/${id}`;
        activityUrl = `${connectedBaseUrl}/${id}/activity`;
        averageSessionUrl = `${connectedBaseUrl}/${id}/average-sessions`;
        performanceUrl = `${connectedBaseUrl}/${id}/performance`;
    } else {
        mainUrl = `${disconnectedBaseUrl}/mockUser.json`;
        activityUrl = `${disconnectedBaseUrl}/mockActivity.json`;
        averageSessionUrl = `${disconnectedBaseUrl}/mockAverageSession.json`;
        performanceUrl = `${disconnectedBaseUrl}/mockPerformance.json`;
    }

    const formattedUser = new User();

    try {
        const mainResponse = await axios.get(mainUrl);
        formattedUser.setName(mainResponse.data.data.userInfos.firstName);
        if(mainResponse.data.data.score) {
            formattedUser.setScore(mainResponse.data.data.score);
        } else {
            formattedUser.setScore(mainResponse.data.data.todayScore);
        }
        formattedUser.setOverview(mainResponse.data.data.keyData);

        const activityResponse = await axios.get(activityUrl);
        const averageSessionResponse = await axios.get(averageSessionUrl);
        formattedUser.setPastWeek(activityResponse.data.data.sessions, averageSessionResponse.data.data.sessions);

        const performanceResponse = await axios.get(performanceUrl);
        formattedUser.setPerformance(performanceResponse.data.data);

        console.log(formattedUser);
        return formattedUser;
    } catch(error) {
        console.log(error);
    }
}
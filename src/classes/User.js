/**
 * Formats the data fetched from back-end.
 * @class
 * @param {Object} data
 */

export class User {
    constructor() {
        this.name = "";
        this.overview = {
            calories: 0,
            protein: 0,
            carbs: 0,
            lipids: 0
        };
        this.pastWeek = [
            {
                day: 1,
                name: "L",
                weight: 0,
                calories: 0,
                duration: 0
            },
            {
                day: 2,
                name: "M",
                weight: 0,
                calories: 0,
                duration: 0
            },
            {
                day: 3,
                name: "M",
                weight: 0,
                calories: 0,
                duration: 0
            },
            {
                day: 4,
                name: "J",
                weight: 0,
                calories: 0,
                duration: 0
            },
            {
                day: 5,
                name: "V",
                weight: 0,
                calories: 0,
                duration: 0
            },
            {
                day: 6,
                name: "S",
                weight: 0,
                calories: 0,
                duration: 0
            },
            {
                day: 7,
                name: "D",
                weight: 0,
                calories: 0,
                duration: 0
            }
        ];
    }

    /**
     * Edits the user's name.
     * @method
     * @param {string} name - The user's new name.
     */
    setName(name) {
        this.name = name;
    }

    /**
     * Edits the user's data overview.
     * @method
     * @param {Object} overview - The user's new data overview.
     */
    setOverview(overview) {
        this.overview = {
            calories: overview.calorieCount,
            protein: overview.proteinCount,
            carbs: overview.carbohydrateCount,
            lipids: overview.lipidCount
        };
    }

    /**
     * Edits the user's last week of sessions.
     * @method
     * @param {Array} sessions - The user's new sessions.
     */
    setPastWeek(sessions, sessionDurations) {
        this.pastWeek.forEach(day => {
            day.weight = sessions[day.day - 1].kilogram;
            day.calories = sessions[day.day - 1].calories;
            day.duration = sessionDurations[day.day - 1].sessionLength;
        });
    }
}
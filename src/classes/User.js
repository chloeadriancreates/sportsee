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
                name: "1",
                weight: 0,
                calories: 0
            },
            {
                name: "2",
                weight: 0,
                calories: 0
            },
            {
                name: "3",
                weight: 0,
                calories: 0
            },
            {
                name: "4",
                weight: 0,
                calories: 0
            },
            {
                name: "5",
                weight: 0,
                calories: 0
            },
            {
                name: "6",
                weight: 0,
                calories: 0
            },
            {
                name: "7",
                weight: 0,
                calories: 0
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
    setPastWeek(sessions) {
        this.pastWeek.forEach(day => {
            day.weight = sessions[day.name - 1].kilogram;
            day.calories = sessions[day.name - 1].calories;
        });
    }
}
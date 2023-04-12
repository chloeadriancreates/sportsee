/**
 * Formats the user data fetched from back-end.
 * @class
*/
export class User {
    constructor() {
        this.name = "";
        this.score = 0;
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
        this.performance = [];
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
     * Edits the user's score.
     * @method
     * @param {number} name - The user's new score.
    */
    setScore(score) {
        this.score = score;
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
     * @param {Array} sessionDurations - The user's new session durations.
    */
    setPastWeek(sessions, sessionDurations) {
        this.pastWeek.forEach(day => {
            day.weight = sessions[day.day - 1].kilogram;
            day.calories = sessions[day.day - 1].calories;
            day.duration = sessionDurations[day.day - 1].sessionLength;
        });
    }

    /**
     * Edits the user's performance stats.
     * @method
     * @param {Array} performance - The user's new stats, with their score and their category.
    */
    setPerformance(performance) {
        const translationTable = {
            "cardio": "Cardio",
            "energy": "Énergie",
            "endurance": "Endurance",
            "strength": "Force",
            "speed": "Vitesse",
            "intensity": "Intensité"
        };
        performance.data.sort((a, b) => b.kind - a.kind);
        performance.data.forEach(stat => {
            this.performance.push({
                score: stat.value,
                type: translationTable[performance.kind[stat.kind]]
            });
        });
    }
}
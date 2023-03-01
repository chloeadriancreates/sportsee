/**
 * Formats the data fetched from back-end.
 * @class
 * @param {Object} data
 */

export class User {
    constructor(data) {
        this.name = data.userInfos.firstName;
        this.calories = data.keyData.calorieCount;
        this.protein = data.keyData.proteinCount;
        this.carbs = data.keyData.carbohydrateCount;
        this.lipids = data.keyData.lipidCount;
    }

    /**
     * Returns the user's name.
     * @method
     * @returns {string}
     */
    getName() {
        return this.name;
    }

    /**
     * Returns the user's calorie count.
     * @method
     * @returns {number}
     */
    getCalories() {
        return this.calories;
    }

    /**
     * Returns the user's protein count.
     * @method
     * @returns {number}
     */
    getProtein() {
        return this.protein;
    }

    /**
     * Returns the user's carb count.
     * @method
     * @returns {number}
     */
    getCarbs() {
        return this.carbs;
    }

    /**
     * Returns the user's lipid count.
     * @method
     * @returns {number}
     */
    getLipids() {
        return this.lipids;
    }
}
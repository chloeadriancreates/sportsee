export class Data {
    constructor(data) {
        this.name = data.userInfos.firstName;
        this.calories = data.keyData.calorieCount;
        this.protein = data.keyData.proteinCount;
        this.carbs = data.keyData.carbohydrateCount;
        this.lipids = data.keyData.lipidCount;
    }

    getName() {
        return this.name;
    }

    getCalories() {
        return this.calories;
    }

    getProtein() {
        return this.protein;
    }

    getCarbs() {
        return this.carbs;
    }

    getLipids() {
        return this.lipids;
    }
}
/**
 * Formats the data fetched from back-end.
 * @class
 * @param {Object} data
 */

export class Data {
    constructor(data) {
        this.data = data;
    }

    /**
     * Returns the data.
     * @method
     * @returns {Object}
     */
    getName() {
        return this.data;
    }
}
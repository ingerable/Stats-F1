export default class Api {

    static async getDrivers() {
        const route: string = process.env.API_ERGAST +  "drivers";
        return fetch(route);
    }
}
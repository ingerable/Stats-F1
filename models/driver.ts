export default class Driver {
    name: String = "";
    birthDate: Date | undefined;
    nationnality: String | undefined;

    constructor (name: String, birthDate: Date, nationnality: String) {
        this.name = name;
        this.birthDate = birthDate;
        this.nationnality = nationnality;
    }

    static createFromApi(json: any): Driver {
        return new Driver("Lewis HAMILTON", new Date("12/02/1997"), "British");
    }
}

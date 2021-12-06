import WikipediaArticle from "./WikipediaArticle";

interface IDriver {
    familyName: String;
    name: String;
    birthDate: String | undefined;
    nationality: String | undefined;
    wikipediaArticleUrl: String;
}

export default class Driver implements IDriver, WikipediaArticle {
    familyName: String = "";
    name: String = "";
    birthDate: String | undefined;
    nationality: String | undefined;
    wikipediaArticleUrl: String = ""

    constructor (familyName: String, name: String, birthDate: String, nationality: String) {
        this.familyName = familyName;
        this.name = name;
        this.birthDate = birthDate;
        this.nationality = nationality;
    }
    
    static getDriversFromJson(driversJson: Array<IDriver>): Array<Driver> {
        let drivers: Array<Driver> = [];
        drivers = driversJson.map((driverJSON, i) => {
            return Driver.getDriverFromJson(driverJSON);
        });

        return drivers;
    }

    static getDriverFromJson(driverJson: IDriver): Driver {
        let driver = new Driver(driverJson.familyName, driverJson.name, driverJson.birthDate, driverJson.nationality);
        driver.wikipediaArticleUrl = driverJson.wikipediaArticleUrl;
        return driver;
    }
}

import { CityType } from "../02/02_02";
import { addMoneyToBudget } from "./03";

let city: CityType;



beforeEach(() => {
    city = {
        title: "New York",
        houses: [{ buildedAt: 2012, repaired: false, address: {number: 100, street:{title: 'White street'}}}, 
                 { buildedAt: 2008, repaired: false, address: {number: 100, street:{title: 'Happy street'}}}, 
                 { buildedAt: 2020, repaired: false, address: {number: 101, street:{title: 'Happy street'}}}, 
    ],
        governmentBuildings: [
            {type: "HOSPITAL", budget: 200000, staffCount: 200, address: {street: {title: "Central Str"}}},
            {type: "FIRE-STATION", budget: 500000, staffCount: 1000, address: {street: {title: "South Str"}}},
        ],
        citizensNumber: 1000000
    }
})

// 01. создайте тип CityType
// 02. заполните объект city, чтобы тесты ниже прошли
test.skip('Budget should be for changed fot HOSPITAL', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(300000);
});
// 02. Тесты должны пройти
test.skip('Budget should be changed for FIRE-STATION', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);
    expect(city.governmentBuildings[1].budget).toBe(400000);
});


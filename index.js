// Code your solution here
const findMatching = function (drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
    }

const fuzzyMatch = function (drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

const matchName = function (drivers, name) {
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}
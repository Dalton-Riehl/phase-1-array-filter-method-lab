function findMatching (driverArray, name) {
    return driverArray.filter(function (driver) {
        return driver.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch (driverArray, letters) {
    return driverArray.filter(function(driver) {
        return driver.startsWith(letters);
    });
}

function matchName (driverObjects, string) {
    return driverObjects.filter(function (element) {
        return element.name === string;
    });
}
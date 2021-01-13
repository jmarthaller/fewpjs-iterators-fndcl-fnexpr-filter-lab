// Code your solution here
function findMatching(drivers, string) {
 
    let filtered = drivers.filter(entry => entry.toLowerCase() === string.toLowerCase());
    return filtered;
}


function fuzzyMatch(drivers, string) {
    let filterSlice = drivers.filter(entry => entry.slice(0, 1) === string.slice(0, 1))
    return filterSlice
}


function matchName(drivers, name) {
    let result = {}
    let filteredObj = drivers.filter(driver => driver.name == name)
    return filteredObj
//     const filtered = Object.keys(raw)
//   .filter(key => allowed.includes(key))
}
const data = require('./data')

function groupBy(data, propertyKeyFunc) {
    const map = new Map();
    for (const entry of data) {
        const key = propertyKeyFunc(entry);
        if (map.has(key)) {
            map.get(key).push(entry)
        } else {
            map.set(key, [entry])
        }
    }
    return map;
}

/**
 * 10 - 20 , 20 - 30 gibi yaş arağını döndürür.
 */
function ageGroupOfEntry(entry) {
    const base = Math.floor(entry.age / 10) * 10;
    return `${base} - ${base + 10}`
}

console.log(groupBy(data, ageGroupOfEntry));
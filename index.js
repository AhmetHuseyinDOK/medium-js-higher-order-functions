const data = require('./data')

function groupBy(data, propertyKey) {
    const map = new Map();
    for (const entry of data) {
        const key = entry[propertyKey];
        if (map.has(key)) {
            map.get(key).push(entry)
        } else {
            map.set(key, [entry])
        }
    }
    return map;
}

console.log(groupBy(data, 'age'));
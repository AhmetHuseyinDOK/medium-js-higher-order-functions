const data = require('./data')

function groupByProfession(data) {
    const map = new Map();
    for (const entry of data) {
        const profession = entry.profession;
        if (map.has(profession)) {
            map.get(profession).push(entry)
        } else {
            map.set(profession, [entry])
        }
    }
    return map;
}

console.log(groupByProfession(data));
import data from './data';
import { groupByAge, groupByAgeGroups, groupByProfession } from './person';

console.log({
    age: groupByAge(data),
    ageGroups: groupByAgeGroups(data),
    profession: groupByProfession(data)
})
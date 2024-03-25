import { generateGroupByFunction } from "./groupBy";

export interface IPerson {
    name: string;
    profession: string;
    age: number
}



export const groupByProfession = generateGroupByFunction<IPerson>((entry) => entry.profession);
export const groupByAge = generateGroupByFunction<IPerson>((entry) => entry.age.toString());

/**
 * 10 - 20 , 20 - 30 gibi yaş arağını döndürür.
 */
function ageGroupOfEntry(entry: IPerson) {
    const base = Math.floor(entry.age / 10) * 10;
    return `${base} - ${base + 10}`
}

export const groupByAgeGroups = generateGroupByFunction<IPerson>(ageGroupOfEntry);
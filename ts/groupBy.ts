
export type GroupByKeyFunction<T> = (data: T) => string

export function groupBy<T>(data: T[], propertyKeyFunc: GroupByKeyFunction<T>): Map<string, T[]> {
    const map = new Map<string, T[]>();
    for (const entry of data) {
        const key = propertyKeyFunc(entry);
        if (map.has(key)) {
            map.get(key)!.push(entry)
        } else {
            map.set(key, [entry])
        }
    }
    return map;
}


export function generateGroupByFunction<T>(propertyKeyFunc: GroupByKeyFunction<T>): (data: T[]) => Map<string, Array<T>> {
    return function (data: T[]) {
        return groupBy(data, propertyKeyFunc)
    };
}
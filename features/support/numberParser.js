export function numberToString(number) {
    const numbers = {
        1: 'One',
        2: 'Two',
        3: 'Three',
        4: 'Four',
        5: "Five",
        6: "Six",
        7: "Seven",
        8: "Eight",
        9: "Nine"
    }

    if (!(number in numbers)) {
        throw new Error(`Cannot convert number ${number} to string`)
    }

    return numbers[number]
}
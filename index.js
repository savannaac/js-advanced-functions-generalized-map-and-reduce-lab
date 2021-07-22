function map(array, callback) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]))
    }
    return newArray
}

function reduce(array, callback, index) {
    let accumulator = index ? index : array[0]
    let i = index ? 0:1

    for (; i < array.length; i++) {
       accumulator = callback(array[i], accumulator)
    }
    return accumulator
}
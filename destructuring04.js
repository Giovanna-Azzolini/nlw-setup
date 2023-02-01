function rand([min = 0, max = 1000]) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log([, 10])

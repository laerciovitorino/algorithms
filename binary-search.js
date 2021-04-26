const binarySearch = (array, target) => {
    let min = 0;
    let max = array.length - 1;
    let guess;

    while (max >= min) {
        guess = Math.floor((min + max) / 2);

        if (array[guess] === target) {
            return guess;
        } else if (array[guess] < target) {
            min = guess + 1;
        } else {
            max = guess - 1;
        }
    }

    return -1;
}

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
console.log(binarySearch(primes, 13));
console.log(binarySearch(primes, 79));
console.log(binarySearch(primes, 80));
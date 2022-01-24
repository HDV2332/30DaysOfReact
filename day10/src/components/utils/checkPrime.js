export const checkPrime = (num) => {
    if (num < 2) {
        if (num === 1) {
            return false
        } else {
            return 0
        }
    }
    for (var i = 2; i < num; i++)
        if (num % i === 0) return false;
    return true;
}
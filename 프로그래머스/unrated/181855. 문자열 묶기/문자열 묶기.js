function solution(strArr) {
    const lenArr = []
    const counts = {};
    for (let i = 0; i < strArr.length; i++) {
        lenArr[i] = strArr[i].length;
    }
    for (let i = 0; i < lenArr.length; i++) {
        const key = lenArr[i];

        if (counts[key]) {
            counts[key] += 1;
        } else {
            counts[key] = 1;
        }
    }

    const values = Object.values(counts);
    const maxValue = Math.max(...values);
    return maxValue;
}
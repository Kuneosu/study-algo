function solution(number) {
    let sum = 0;
    for (num of number) {
        sum += parseInt(num);
    };
    return sum%9;
}
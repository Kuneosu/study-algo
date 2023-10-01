function solution(numbers, n) {
    let sum = 0;
    let i =0;
    while(sum<=n){
        sum += numbers[i];
        i++;
        if(sum>n){return sum;}
    }
}
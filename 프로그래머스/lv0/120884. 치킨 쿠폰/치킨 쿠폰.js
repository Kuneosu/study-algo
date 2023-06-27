function solution(chicken) {
    let answer = Math.floor(chicken/10)
    let order = answer;
    let less_order = chicken%10;
    while(order+less_order>=10){
        order += less_order;
        less_order = order%10;
        order = Math.floor(order/10);
        answer += order;
        }
    return answer;
}
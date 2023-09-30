function solution(num_list, n) {
    var answer = [];
    answer.push(...num_list.splice(n));
    answer.push(...num_list)
    return answer;
}
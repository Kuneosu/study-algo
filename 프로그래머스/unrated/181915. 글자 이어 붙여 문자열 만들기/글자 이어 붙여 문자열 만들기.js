function solution(my_string, index_list) {
    let answer = [];
    for(index of index_list){
        answer.push(my_string[index]);
    }
    return answer.join('');
}
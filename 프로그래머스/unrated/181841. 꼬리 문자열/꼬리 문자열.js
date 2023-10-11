function solution(str_list, ex) {
    let result = [];
    for(str of str_list){
        if(!str.includes(ex)){
            result.push(str);
        }
    }
    return result.join('');
}
function solution(my_string, is_suffix) {
    let suffix = [];
    for(let i=0;i<my_string.length;i++){
        suffix.push(my_string.slice(i));
    }
    if(suffix.includes(is_suffix)){
        return 1
    }else{
        return 0;
    }
}
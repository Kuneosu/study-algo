function solution(my_string, is_prefix) {
    let prefix = [];
    for(let i=0;i<my_string.length;i++){
        prefix.push(my_string.substr(0,i));
    }
    if(prefix.includes(is_prefix)){
        return 1;
    }else{
        return 0;
    }
}
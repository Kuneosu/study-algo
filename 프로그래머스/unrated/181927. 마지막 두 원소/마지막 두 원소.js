function solution(num_list) {
    let len = num_list.length;
    let last = num_list[len-1];
    let fore_last = num_list[len-2];
    if(last>fore_last){
        num_list.push(last-fore_last);
    }else{
        num_list.push(last*2);
    }
    return num_list;
}
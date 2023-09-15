function solution(a, b) {
    let a_string = a.toString();
    let b_string = b.toString();
    let sum_ab = parseInt(a_string+b_string);
    let sum_ba = parseInt(b_string+a_string);
    if(sum_ab >= sum_ba){
        return sum_ab;
    }else{
        return sum_ba;
    }
}
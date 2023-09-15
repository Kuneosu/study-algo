function solution(a, b) {
    let a_string = a.toString();
    let b_string = b.toString();
    let answer1 = parseInt(a_string+b_string);
    let answer2 = parseInt(2*a*b);
    if(answer1>=answer2){
        return answer1;
    }else{
        return answer2;
    }
}
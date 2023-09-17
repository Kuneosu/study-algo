function solution(a, d, included) {
    let i=0;
    let answer = 0;
    for(let bool of included){ 
        if(bool){
            let n = a+(i*d);
            answer += n;
        }
        i += 1;
    }
    return answer;
}
function solution(binomial) {
    let aopb = binomial.split(' ');
    const a = parseInt(aopb[0]);
    const b = parseInt(aopb[2]);
    const op = aopb[1];
    
    switch(op){
        case '+':
            return a+b;
            break;
        case '-':
            return a-b;
            break;
        case '*':
            return a*b;
            break;
        case '/':
            return parseInt(a/b);
            break;
        default:
            break;
    }
}
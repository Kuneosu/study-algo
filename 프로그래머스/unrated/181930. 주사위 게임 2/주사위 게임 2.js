function solution(a, b, c) {
    let abc = a+b+c;
    let abc2 = a**2+b**2+c**2;
    let abc3 = a**3+b**3+c**3;
    if(a===b && b===c){
        return abc*abc2*abc3;
    }else if(a===b || b===c || a===c){
        return abc*abc2;
    }else{
        return abc
    }
}
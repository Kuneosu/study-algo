function solution(n_str) {
    let zero= true;
    let i = 0;
    while(zero){
        if(n_str[i]==='0'){
            i++;
            continue;
        }else{
            zero = false;
        }
    }
    
    return n_str.substring(i,n_str.length);
}
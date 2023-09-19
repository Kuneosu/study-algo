function solution(l, r) {
    let result = [];
    for(let i=l;i<=r;i++){
        let num = i.toString();
        let check = true;
        let word= '';
        for(char of num){
            if(char==='5' || char==='0'){
                word+=char;
            }else{
                check = false;
            }
        }
        if(check){
            result.push(i);
        }
    }
    if(result.length>0){
        return result;
    }else{
        return [-1];
    }
}
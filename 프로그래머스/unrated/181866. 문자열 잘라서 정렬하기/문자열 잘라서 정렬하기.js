function solution(myString) {
    let result = myString.split('x');
    result.sort();
    result = result.filter((value,index)=>{
        return value != '';
    });
    
    return result;
}
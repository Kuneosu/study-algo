function solution(order) {
    let result = 0;
    for(coffee of order){
        if(coffee.includes("cafelatte")){
           result += 5000 ;
        }else{
            result += 4500;
        }
    }
    return result;
}
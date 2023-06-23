function solution(order) {
    let answer = 0;
    // 아메리카노 = 4500, 카페라테 = 5000
    // iceamericano, americano, anything = 차가운 아메리카노
    // hotamericano = 따뜻한 아메리카노
    // cafelatte, icecafelatte = 차가운 카페라테
    // hotcafelatte = 따뜻한 카페라테
    for(let coffee of order){
        if(coffee.includes('cafelatte')){
            answer += 5000;}
        else{
            answer += 4500;}
    }
    return answer;
}
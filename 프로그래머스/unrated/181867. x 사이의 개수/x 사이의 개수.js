function solution(myString) {
    const spl = myString.split('x');
    let result = [];
    for(word of spl){
        result.push(word.length);
    }
    return result;
}
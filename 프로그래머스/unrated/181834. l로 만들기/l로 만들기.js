function solution(myString) {
    const lUnicode = "l".charCodeAt(0);
    let result = "";
    for(str of myString){
        if(str.charCodeAt(0)<lUnicode){
            result += "l";
        }else{
            result += str;
        }
    }
    return result;
}
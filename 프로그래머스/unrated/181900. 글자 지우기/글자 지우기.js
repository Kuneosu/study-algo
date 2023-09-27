String.prototype.replaceAt=function(index, character) {

return this.substr(0, index) + character + this.substr(index+character.length); }

function solution(my_string, indices) {
    let str = my_string;
    for(index of indices){
        str = str.replaceAt(index,'#');
    }
    str = str.replace(/#/gi,'');
    return str;
}
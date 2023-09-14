const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    let str = input.toString();
    let result = [];
    for (let i = 0; i < str.length; i++) {
        result.push(str[i]);
        result.push("\n");
    }
    result.pop("\n");
    console.log(result.join(''));
    
});
function solution(myString) {
    let arr = myString.split('');
    for(let i=0;i<arr.length;i++){
        if(arr[i] === 'a'){
            arr[i] = arr[i].toUpperCase();
        }else if(arr[i] != 'A'){
            arr[i] = arr[i].toLowerCase();
        }
    }
    return arr.join('');
}
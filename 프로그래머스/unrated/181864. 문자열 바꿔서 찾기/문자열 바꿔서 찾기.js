function solution(myString, pat) {
    myString = myString.replaceAll('A','#');
    myString = myString.replaceAll('B','@');
    myString = myString.replaceAll('#','B');
    myString = myString.replaceAll('@','A');
    
    return myString.includes(pat) ? 1 : 0;
}
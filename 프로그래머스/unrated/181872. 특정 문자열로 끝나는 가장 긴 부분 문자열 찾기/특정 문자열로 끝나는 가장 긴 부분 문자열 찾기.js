const solution = (myString,pat) =>{
    const index = myString.lastIndexOf(pat)+pat.length;
    return myString.substring(0,index);
};
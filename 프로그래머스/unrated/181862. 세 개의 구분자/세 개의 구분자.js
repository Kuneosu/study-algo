function solution(myStr) {
    myStr = myStr.replaceAll('a','#');
    myStr = myStr.replaceAll('b','#');
    myStr = myStr.replaceAll('c','#');
    myStr = myStr.split('#');
    myStr = myStr.filter((item)=>{
        return item !== '';
    })
    return myStr.length>0 ? myStr : ["EMPTY"];
}
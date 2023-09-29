function solution(n, slicer, num_list) {
    let result = [];
    let a = slicer[0];
    let b = slicer[1];
    let c = slicer[2];
    
    switch(n){
        case 1:
            result = num_list.slice(0,b+1);
            break;
        case 2:
            result = num_list.slice(a,num_list.length);
            break;
        case 3:
            result = num_list.slice(a,b+1);
            break;
        case 4:
            for(let i=a;i<=b;i+=c){
                result.push(num_list[i]);
            }
            break;
        default:
            break;
    }
    
    return result;
}
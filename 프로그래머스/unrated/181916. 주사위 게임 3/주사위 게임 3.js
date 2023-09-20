function solution(a, b, c, d) {
    let numList = [a, b, c, d];
    let numSet = new Set([a, b, c, d,]);

    if (numSet.size === 4) {
        return(Math.min(...numSet));
    } else if (numSet.size === 3) {
        for (num of numSet) {
            let count = numList.filter(n => num === n).length;
            if (count === 2) {
                numSet.delete(num);
                break;
        }
        }
        let result = [...numSet];
        return(result[0] * result[1]);
    } else if (numSet.size === 2) {
        let count = numList.filter(n => numList[0] === n).length;
        let result = [...numSet];
        let p = result[0];
        let q = result[1];
        if (count === 2) {
            return((p + q) * Math.abs(p - q));
        } else {
            let num_count = numList.filter(n => p===n).length;
            if(num_count===3){
                return(Math.pow((10 * p + q),2));
            }else{
                return(Math.pow((10*q+p),2));
            }
            
        }
    } else {
        return(numList[0] * 1111);
    }

}
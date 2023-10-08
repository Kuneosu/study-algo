function solution(arr1, arr2) {
    // 두 배열의 크기가 같지 않을때
    if(arr1.length!==arr2.length){
        // arr1 > arr2 => 1, arr1 < arr2 => -1
        return arr1.length>arr2.length ? 1 : -1;
    }else{ // 두 배열의 크기가 같을때
        // sum_1 = arr1의 합계, sum_2 = arr2의 합계
        const sum_1 = arr1.reduce((sum,cur)=>{
            return sum + cur;
        },0);
        const sum_2 = arr2.reduce((sum,cur)=>{
            return sum + cur;
        },0);
        // 두 배열의 합계가 같을때
        if(sum_1===sum_2){
            return 0;
        }else{ // 두 배열의 합계가 다를때
            return sum_1>sum_2 ? 1 : -1;
        }
    }
}
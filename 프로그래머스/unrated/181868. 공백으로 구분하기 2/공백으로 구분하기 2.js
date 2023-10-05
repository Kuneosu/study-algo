function solution(my_string) {
    return my_string.split(' '). // 공백을 구분자로 배열에 저장
    filter((value,index,arr)=>{ 
        return value != '';  // 배열에 저장된 공백 제거
    });
}
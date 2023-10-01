function solution(str_list) {
    if(str_list.includes('l') || str_list.includes('r')){
        for(let i=0;i<str_list.length;i++){
            if(str_list[i]==='l'){
                str_list.splice(i);
                return str_list;
            }else if(str_list[i]==='r'){
                let result = str_list.splice(i+1);
                return result;
            }
        }
    }else{
        return [];
    }
    
}
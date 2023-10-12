function solution(picture, k) {
    let result = [];
    for(let i=0;i<picture.length;i++){
        const pre_word = picture[i];
        let word = "";
        for(let j=0;j<picture[i].length;j++){
            for(let x=0;x<k;x++){
                word += pre_word[j];
            }
        }
        for(let x=0;x<k;x++){
            result.push(word);
        }
    }
    return result;
}
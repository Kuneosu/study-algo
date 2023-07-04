function solution(arr) {
    let answer = arr;
    let row = answer.length;
    let col = answer[0].length;
    if (row > col) {
        for (let i = 0; i < row; i++) {
            while (answer[i].length < row) {
                answer[i].push(0);
            }
        }
    }
    else if (col > row) {
        let new_item = []
        for (let i = 0; i < col; i++) {
            new_item.push(0);
        }
        while (answer.length < col) {
            answer.push(new_item);
        }
    } else {
        return answer;
    }
    return answer;
}
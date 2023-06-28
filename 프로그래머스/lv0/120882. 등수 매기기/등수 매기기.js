function updateArray(myArray, oldValue, newValue) {
    if (!myArray instanceof Array) return;
    const index = myArray.indexOf(oldValue);
    if (index !== -1) {
        myArray[index] = newValue;
    }
}

function solution(score) {
    const avg = [];
    for (let item of score) {
        avg.push((item[0] + item[1]) / 2)
    }
    let sort_avg = [...avg];
    sort_avg.sort(function (a, b) {
        return b - a;
    });
    let pre_item = 101;
    let rank = 1;
    const ranks = {};
    for (let item of sort_avg) {
        if (item !== pre_item) {
            ranks[item] = rank;
            rank++;
            pre_item = item;
        } else {
            rank++;
        }
    }
    
    const answer = [];
    for (let it of avg) {
        it = it.toString();
        answer.push(ranks[it]);
    }

    return answer;
}
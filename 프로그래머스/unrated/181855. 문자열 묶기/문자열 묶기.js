function solution(strArr) {
    let count = [];
for (str of strArr) {
    count.push(str.length)
}
let count_set = new Set(count);
let count_obj = [];
for (cnt of count_set) {
    count_obj.push({ cnt: cnt, num: 0 });
}
for (cnt of count) {
    for (obj of count_obj) {
        if (obj.cnt === cnt) {
            obj.num++;
        }
    }
}

let max = 0;
for (obj of count_obj) {
    if (obj.num > max) {
        max = obj.num;
    }
}
    return max;
    
}
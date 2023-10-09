function solution(rank, attendance) {
    let abc = [];
    for (let i = 1; i <= rank.length; i++) {
        let index = rank.indexOf(i);
        if (attendance[index]) {
            abc.push(index);
         }
    }
    return (10000*abc[0] + 100*abc[1] + abc[2]);
}
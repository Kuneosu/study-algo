function solution(my_string) {
    let answer = Array(52).fill(0);

    [...my_string].forEach((str, idx) => {
        const charCode = my_string.charCodeAt(idx);

        if (charCode >= 65 && charCode <= 90) {
            answer[charCode - 65] += 1;
        } else if (charCode >= 97 && charCode <= 122) {
            answer[charCode - 71] += 1;
        }
    });
    return answer;
}
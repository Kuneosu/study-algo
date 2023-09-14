function solution(my_string, overwrite_string, s) {
    let len = my_string.length - (overwrite_string.length + s);
    // 14
    let result = [];
    result.push(my_string.substr(0, s));
    result.push(overwrite_string);
    if (len !== 0) {
        result.push(my_string.slice(-len));
    }
    return result.join('');
}
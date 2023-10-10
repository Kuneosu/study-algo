function solution(arr, delete_list) {
    const result = arr.filter((item) => {
    return !delete_list.includes(item);
    });

    return result;
}
function solution(a, b) {
    const int_a = BigInt(a);
    const int_b = BigInt(b);
    const sum_str = BigInt(int_a+int_b);
    return sum_str.toString();
}
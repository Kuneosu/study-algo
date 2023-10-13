function solution(n) {
  const result = new Array(n).fill().map(() => new Array(n).fill(0));
  let left = 0, right = n - 1, top = 0, bottom = n - 1;
  let num = 1;

  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result[top][i] = num++;
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result[i][right] = num++;
    }
    right--;

    for (let i = right; i >= left; i--) {
      result[bottom][i] = num++;
    }
    bottom--;

    for (let i = bottom; i >= top; i--) {
      result[i][left] = num++;
    }
    left++;
  }

  return result;
}
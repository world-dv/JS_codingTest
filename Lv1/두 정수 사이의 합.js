function solution(a, b) {
    var answer = 0;
    var arr = new Array(Math.abs(a - b) + 1).fill().map((c, i) => i + Math.min(a, b));
    answer = arr.reduce((a, b) => a + b, 0);
    return answer;
}

function solution(n) {
    var answer = [];
    answer = String(n).split("").map((a) => Number(a)).reverse();
    return answer;
}

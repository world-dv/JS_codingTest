function solution(n) {
    var answer = 0;
    answer = Number(String(n).split("").sort((a, b) => b - a).join(""));
    return answer;
}

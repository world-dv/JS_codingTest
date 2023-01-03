function solution(score) {
    var answer = [];
    score = score.map((a) => parseInt(a[0] + a[1]));
    var arr = [...score].sort((a, b) => b - a);
    answer = score.map((a) => arr.indexOf(a) + 1);
    return answer;
}

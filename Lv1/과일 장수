function solution(k, m, score) {
    var answer = 0;
    var a = [];
    score = score.sort((a, b) => b - a);
    for(var i = m; i <= score.length; i += m) {
        answer += score.at(i - 1) * m;
    }
    return answer;
}

function solution(n, t) {
    var answer = n;
    for(var i = 0; i < t; i++) {
        answer += n;
        n = n * 2;
    }
    return answer;
}

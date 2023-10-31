function solution(n) {
    var answer = 0;
    for(var i = 1; i <= n; i++) {
        answer += n % i === 0 ? 1 : 0;
    }
    return answer;
}

function solution(n) {
    var answer = 0;
    var count = 0;
    for(var i = 1; i <= n; i++) {
        for(var j = 1; j <= i; j++) {
            count += (i % j === 0) ? 1 : 0;
        }
        answer += (count >= 3) ? 1 : 0;
        count = 0;
    }
    return answer;
}

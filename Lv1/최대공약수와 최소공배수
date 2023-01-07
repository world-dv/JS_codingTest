function solution(n, m) {
    var answer = [];
    var a = Math.max(n, m);
    for(var i = 1; i <= a; i++) {
        if((n % i === 0) && (m % i === 0)) {
            answer[0] = i;
        }
    }
    answer[1] = n * m / answer.at(0);
    return answer;
}

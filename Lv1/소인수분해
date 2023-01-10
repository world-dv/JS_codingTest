function solution(n) {
    var answer = [];
    if(n === 1) {
        return answer.push(n);
    }
    for(var i = 2; i <= n; i++) {
        if(n % i == 0) {
            answer.push(i);
            n = parseInt(n / i);
            i = 1;
        }
    }
    answer = [...answer].sort((a, b) => a - b).filter((a, i) => a !== answer.at(i + 1));
    return answer;
}

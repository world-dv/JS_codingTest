function solution(n) {
    var answer = 0;
    answer = (Math.sqrt(n) % 1 === 0) ? Math.pow(parseInt(Math.sqrt(n)) + 1, 2) : -1;
    return answer;
}

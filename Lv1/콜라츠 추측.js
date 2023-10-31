function solution(num) {
    var answer = 0;
    if(num === 1) return 0;
    while(answer < 500) {
        if(num === 1) break;
        (num % 2 === 0) ? num /= 2 : num = num * 3 + 1;
        answer++;
    }
    return answer === 500 ? -1 : answer;
}

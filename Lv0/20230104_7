function solution(num, total) {
    var answer = new Array(num);
    var a = 0;
    for(var i = 1; i <= num; ++i) {
        a += i;
    }
    answer = answer.fill().map((b, i) => (total - a) / num + i + 1);
    return answer;
}

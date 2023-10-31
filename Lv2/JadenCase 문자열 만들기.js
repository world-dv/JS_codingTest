function solution(s) {
    var answer = '';
    var i = 0;
    s.split("").forEach((a) => {
        if(a === " ") {
            i = -1;
            answer += a;
        } else if (i === 0) {
            answer += a.toUpperCase();
        } else {
            answer += a.toLowerCase();
        }
        i++;
    })
    return answer;
}

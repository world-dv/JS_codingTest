function solution(s) {
    var answer = '';
    var i = 0;
    s.split("").forEach((a) => {
        if(a === " ") {
            answer += " ";
            i = 0;
        }
        else {
            answer += i % 2 === 0 ? a.toUpperCase() : a.toLowerCase();
            i++;
        }
    });
    return answer;
}

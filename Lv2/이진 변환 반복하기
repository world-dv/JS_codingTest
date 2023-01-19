function solution(s) {
    var answer = [];
    var a = 0;
    var count = 0;
    while(s !== "1") {
        a += s.replaceAll("1", "").length; count++;
        s = (s.replaceAll("0", "").length).toString(2);
    }
    answer.push(count, a);
    return answer;
}

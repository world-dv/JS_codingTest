function solution(s) {
    var answer = '';
    answer = s.split("").filter((a) => s.indexOf(a) === s.lastIndexOf(a)).sort().join("");
    return answer;
}

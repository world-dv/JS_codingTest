function solution(age) {
    var answer = '';
    answer = String(age).split("").map((a) => String.fromCharCode(parseInt(a) + 97)).join("");
    return answer;
}

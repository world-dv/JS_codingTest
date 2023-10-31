function solution(n) {
    var answer = new Array(n).fill().map((a, i) => i + 1);
    answer = answer.filter((a) => n % a === 1);
    return answer.at(0);
}

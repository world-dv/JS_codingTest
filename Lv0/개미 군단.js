function solution(hp) {
    var answer = 0;
    answer = parseInt(hp / 5) + parseInt(hp % 5 / 3) + (hp % 5 % 3);
    return answer;
}

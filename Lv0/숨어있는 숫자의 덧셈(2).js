function solution(my_string) {
    var answer = 0;
    answer = my_string.match(/\d+/g);
    answer = (answer === null) ? 0 : answer.reduce((a, b) => a + Number(b), 0);
    return answer;
}

function solution(array) {
    var answer = [];
    answer[0] = Math.max(...array);
    answer[1] = array.indexOf(answer[0], 0);
    return answer;
}

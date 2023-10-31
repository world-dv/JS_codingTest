function solution(array, height) {
    var answer = 0;
    answer = (array.filter((a) => (a > height))).length;
    return answer;
}

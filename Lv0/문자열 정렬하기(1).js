function solution(my_string) {
    var answer = [];
    answer = my_string.split("").filter((a) => isNaN(a) == 0).map((a) => Number(a)).sort();
    return answer;
}

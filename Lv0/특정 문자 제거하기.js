function solution(my_string, letter) {
    var answer = '';
    answer = my_string.split("").filter((a) => a != letter).join("");
    return answer;
}

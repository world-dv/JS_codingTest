function solution(my_string) {
    var answer = '';
    answer = my_string.split("").filter((a) => a!=="a" && a!=="i" && a!=="e" && a!=="o" && a!=="u").join("");
    return answer;
}

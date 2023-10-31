function solution(my_str, n) {
    var answer = [];
    answer = my_str.split("").map((a, i) => my_str.slice(i, i + n)).filter((b, i) => i % n === 0);
    return answer;
}

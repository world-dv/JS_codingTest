function solution(numbers) {
    var answer = 0;
    answer = Math.max(...numbers);
    var index = numbers.indexOf(answer);
    numbers.splice(index, 1);
    answer *= Math.max(...numbers);
    return answer;
}

function solution(my_string, num1, num2) {
    var answer = '';
    answer = my_string.slice(0, num1) + my_string[num2] + my_string.slice(num1+1, num2) + my_string[num1] + my_string.slice(num2+1, my_string.length);
    return answer;
}

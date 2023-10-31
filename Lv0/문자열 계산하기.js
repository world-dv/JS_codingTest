function solution(my_string) {
    var answer = 0;
    my_string = my_string.split(" ");
    answer += Number(my_string[0]);
    for(var i = 1; i < my_string.length; i += 2) {
        answer += my_string[i] === "+" ? Number(my_string[i + 1]) : Number(my_string[i + 1] * (-1));   
    }
    return answer;
}

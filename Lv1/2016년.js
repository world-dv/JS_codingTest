function solution(a, b) {
    var d_name = ["FRI","SAT","SUN","MON","TUE","WED","THU"];
    var day = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var answer = '';
    var sum_day = 0;
    for(var i = 0; i < a - 1; i++) {
        sum_day += day.at(i);
    }
    answer = d_name.at((sum_day + b) % 7 - 1);
    return answer;
}

function solution(number) {
    var answer = 0;
    var len = number.length;
    for(var i = 0; i < len; i++) {
        for(var j = i + 1; j < len; j++) {
           for(var z = j + 1; z < len; z++) {
               answer += number[i] + number[j] + number[z] === 0;
           }
        }
    }
    return answer;
}

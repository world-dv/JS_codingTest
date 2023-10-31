function solution(left, right) {
    var answer = 0;
    var b = 0;
    for(var i = left; i <= right; i++) {
       for(var j = 1; j <= i; j++) { 
           b += i % j === 0;
       }
       answer += b % 2 === 0 ? i : i * (-1);
        b = 0;
    }
    
    return answer;
}

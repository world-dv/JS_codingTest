function solution(denum1, num1, denum2, num2) {
    var answer = [];
    var a, b;
    
    a = denum1 * num2 + denum2 * num1;
    b = num2 * num1;
    
    var x = 1;
    for(var i = 2; i <= Math.min(a, b); i++) {
        if(a % i === 0 && b % i === 0) {
            x = i;
        }
    }
    answer[0] = parseInt(a / x);
    answer[1] = parseInt(b / x);
    return answer;
}

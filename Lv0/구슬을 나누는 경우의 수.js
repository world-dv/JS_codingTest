function solution(balls, share) {
    var answer = BigInt(1);
    for(var i = share + 1; i <= balls; i++) {
        answer *= BigInt(i);      
    };
    answer = (balls === share) ? 1 : answer / BigInt((factorial(balls - share)));
    return answer;
}

function factorial(x) {
    if(x <= 1) return x;
    return x * factorial(x - 1);
}

function solution(price, money, count) {
    var answer = 0;
    for(var i = price; i <= count * price; i += price) {
        answer += i;
    }
    return answer > money ? answer - money : 0;
}

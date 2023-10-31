function solution(chicken) {
    var answer = 0;
    
    while(chicken >= 10) {
        answer += parseInt(chicken / 10);
        chicken = parseInt(chicken / 10) + chicken % 10;
    }
    return answer;
}

function solution(order) {
    var answer = 0;
    answer = String(order).split("");
    answer = answer.reduce((a, b) => {
        return (parseInt(b) === 3 || parseInt(b) === 6 || parseInt(b) === 9) ? a + 1 : a + 0; 
    }, 0);
    return answer;
}

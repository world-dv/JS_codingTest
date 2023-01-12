function solution(n) {
    var answer = 0;
    var arr = [];
    var i = 0;
    while(n > 0) {
        arr[i] = parseInt(n % 3);
        n = parseInt(n / 3);
        i++;
    }
    answer = arr.map((a) => {
        i--;
        return Math.pow(3, i) * a
    }).reduce((a, b) => a + b , 0);
    return answer;
}

/*function solution(n) {
    var answer = 0;
    answer = parseInt([...n.toString(3)].reverse().join(""), 3);
    return answer;
}*/

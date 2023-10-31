function solution(x) {
    var answer = true;
    answer = String(x).split("").reduce((a, b) => a + Number(b),0);
    return x % answer === 0;
}

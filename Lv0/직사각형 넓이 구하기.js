function solution(dots) {
    var answer = 0;
    var a1 = dots.flat().filter((a, i) => i % 2 === 0);
    var a2 = dots.flat().filter((a, i) => i % 2 !== 0);
    answer = (Math.max(...a1) - Math.min(...a1)) * (Math.max(...a2) - Math.min(...a2));
    return answer;
}

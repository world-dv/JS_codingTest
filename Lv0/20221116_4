function solution(sides) {
    var answer = 0;
    var maxSide = Math.max(...sides);
    answer = sides.reduce((a,b) => a + b, 0);
    return maxSide < answer - maxSide ? 1 : 2;
}

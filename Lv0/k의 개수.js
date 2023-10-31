function solution(i, j, k) {
    var answer = 0;
    answer = new Array(j - i + 1).fill().map((x, index) => index+i).join().split(",").join("").split("").filter((x) => Number(x) === k);
    return answer.length;
}

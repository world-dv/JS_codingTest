function solution(arr) {
    var answer = [];
    var min_v = Math.min(...arr);
    answer.push(arr.filter((a) => a !== min_v).length > 0 ? arr.filter((a) => a !== min_v) : -1);
    return answer.flat();
}

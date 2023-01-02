function solution(array, n) {
    var answer = 0;
    var arr = array.map((a) => Math.abs(n - a));
    arr = arr.filter((x) => x === Math.min(...arr));
    answer = array.indexOf(n - arr[0]) !== -1 ? n - arr[0] : arr[0] + n;  
    return answer;
}

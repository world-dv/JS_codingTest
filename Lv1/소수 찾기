function solution(n) {
    var answer = 0;
    var arr = new Array(n - 1).fill().map((a, i) => i + 2);
    for(var i = 0; i < n; i++) {
        if(arr[i] !== 0) {
            for(var j = arr[i] + arr[i] - 2; j <= n; j += arr[i]) {
                arr[j] = 0;
            }
        }
    }
    answer = arr.filter((a) => a !== 0).length;
    return answer;
}

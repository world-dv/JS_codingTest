function solution(s) {
    var answer = [];
    var arr = [];
    s.split("").forEach((a, i) => {
        if(i === s.indexOf(a)) {
            answer.push(-1);
            arr[a] = i;
        } else {
            answer.push(i - arr[a]);
            arr[a] = i;
        }
    })
    return answer;
}

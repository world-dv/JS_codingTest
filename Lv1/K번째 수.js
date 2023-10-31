function solution(array, commands) {
    var answer = [];
    var arr = [];
    commands.forEach((a, i) => {
        arr.push(array.slice(a.at(0) - 1, a.at(1)).sort((a, b) => a - b));
        answer.push(arr[i][a.at(2) - 1]);
    })
    return answer;
}

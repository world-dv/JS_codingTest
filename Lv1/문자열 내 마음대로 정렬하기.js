function solution(strings, n) {
    var answer = [];
    answer = [...strings].sort((a, b) => {
        if(a.charCodeAt(n) === b.charCodeAt(n))
            return (a > b) ? 1 : -1;
        return a.charCodeAt(n) - b.charCodeAt(n);
    });
    return answer;
}

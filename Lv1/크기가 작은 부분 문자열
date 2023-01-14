function solution(t, p) {
    var answer = 0;
    for(var i = 0; i < t.length; i+=1) {
        if(Number(t.slice(i, i+p.length)) <= Number(p) && t.slice(i, i+p.length).length === p.length)
            answer++;
    }
    return answer;
}

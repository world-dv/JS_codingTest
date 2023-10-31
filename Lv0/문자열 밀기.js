function solution(A, B) {
    var answer = 0;
    if(A === B) return answer;
    for(var i = 0; i < A.length; i++) {
        A = A.at(A.length - 1) + A.slice(0, -1);
        if(A === B) return answer = i + 1;
    }
    return answer = -1;
}

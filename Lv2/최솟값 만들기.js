function solution(A,B){
    var answer = 0;
    A = A.sort((a, b) => a - b);
    B = B.sort((a, b) => b - a);
    answer = A.reduce((a, b, i) => a + b * B.at(i), 0);
    return answer;
}

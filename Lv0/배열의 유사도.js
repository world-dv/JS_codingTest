function solution(s1, s2) {
    var answer = 0;
    answer = s1.filter((a) => s2.includes(a));
    return answer.length;
}

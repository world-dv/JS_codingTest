function solution(s) {
    var answer = 0;
    s.split(" ").map((a, i) => {
        if(a === "Z") {
            s = s.replace(a, (-1) * s.split(" ").at(i - 1));
        }
    });
    answer = s.split(" ").reduce((a, b, i) => a + Number(b), 0);
    return answer;
}

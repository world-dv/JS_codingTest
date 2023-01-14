function solution(quiz) {
    var answer = [];
    quiz.forEach((a) => {
        a = a.split(" ");
        if(a.at(1) === "+") {
            answer.push(Number(a.at(4)) === Number(a.at(0)) + Number(a.at(2)) ? "O" : "X");
        } else {
            answer.push(Number(a.at(4)) === Number(a.at(0)) - Number(a.at(2)) ? "O" : "X"); 
        }
    })
    return answer;
}

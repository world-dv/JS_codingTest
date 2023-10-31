function solution(id_pw, db) {
    var answer = '';
    answer = db.filter((a) => a[0] === id_pw[0]).flat();
    answer = (isNaN(answer[1])) ? "fail" : (answer[1] === id_pw[1] ? "login" : "wrong pw");
    return answer;
}

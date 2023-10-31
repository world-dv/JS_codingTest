function solution(cipher, code) {
    var answer = '';
    
    for(var i = code; i <= cipher.length; i += code) {
        answer += cipher.split("").at(i - 1);
    }
    
    return answer;
}

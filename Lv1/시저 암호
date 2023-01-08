function solution(s, n) {
    var answer = '';
    var b = 0, d = 0;
    answer = s.split("").map((a) => {
        b = a.charCodeAt(0);
        if((b >= 97 && b <= 122) || (b >= 65 && b <= 90)) {
            d = (b + n > (b >= 97 ? 122 : 90)) ? b + n - 26: b + n; 
            return String.fromCharCode(d);
        } else {
            return a;
        }
    }).join("");
    return answer;
}

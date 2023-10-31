function solution(polynomial) {
    var answer = '';
    var c = 0;
    var b = 0;
    if(Number(polynomial) === 0 || polynomial === " ") {
        return answer = "0";
    }
    polynomial.split(" ").join("").split("+").forEach((a) => {
        if(!a.includes("x")) {
            b += Number(a);
        } else {
            c += a;
        }
    });
    if(c) {
        c = c.split("x").reduce((a, b) => a += Number(b) === 0 ? 1 : Number(b) ,0) - 1;
        answer += c > 1 ? c + "x" : (c === 1 ? "x" : "");
        answer += b > 0 && c < 1 ? b : (b > 0 ? " + " + b : "");
    } else {
        answer += b;
    }
        
    return answer.toString();
}

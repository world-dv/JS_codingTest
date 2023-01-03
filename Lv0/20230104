function solution(keyinput, board) {
    var answer = [];
    var a1 = 0, a2 = 0;
    var b1 = parseInt(board[0] / 2);
    var b2 = parseInt(board[1] / 2);
    
    var r = [...keyinput].forEach((a) => {
        if(a === "right") a1 += 1;
        if(a === "left") a1 -= 1;
        if(a === "up") a2 += 1;
        if(a === "down") a2 -= 1;
        
        a1 = (Math.abs(a1) > b1 && a1 != 0) ? (a1 < 0 ? b1 * (-1) : b1) : a1;
        a2 = (Math.abs(a2) > b2 && a2 != 0) ? (a2 < 0 ? b2 * (-1) : b2) : a2;
    })
    answer[0] = a1;
    answer[1] = a2;
    return answer;
}

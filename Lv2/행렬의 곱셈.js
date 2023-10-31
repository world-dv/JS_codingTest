function solution(arr1, arr2) {
    var answer = new Array(arr1.length).fill(0).map((a) => new Array(arr2.at(0).length));
    var a = 0;
    for(var i = 0; i < arr1.length; i++) {
        for(var j = 0; j < arr2.at(0).length; j++) {
            for(var z = 0; z < arr2.length; z++) {
                a += arr1[i][z] * arr2[z][j];
            }
            answer[i][j] = a;
            a = 0;
        }
    }
    return answer;
}

firstArr = [0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1] // [4,7,2,4]
secondArr =  [0,0,1,1,1,1,0,1,1,1] // [2,4,1,3]

function transformationArr (m) {
    var arr = [1];
    for (var i = 1; i < m.length; i++){
        if (m[i] === m[i-1]){
            arr[arr.length - 1] += 1;
        } else {
            arr.push(1);
        }
    }
    return arr;
}

alert (transformationArr (firstArr));
alert (transformationArr (secondArr));
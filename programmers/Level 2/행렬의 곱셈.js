function solution(arr1, arr2) {
    let result = [];
    for(let i = 0 ; i < arr1.length ; i++){
    let column = [];    
        for(let j = 0 ; j < arr2[0].length ; j++){
            let row = 0;
            for(let k = 0; k < arr2.length ; k++){
                row += arr1[i][k] * arr2[k][j];
            }
            column.push(row);
        }
    result.push(column);
    }
    return result;
}
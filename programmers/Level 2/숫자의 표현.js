function solution(n) {
    let count = 1;
    for( let  i = 1; i < n/2; i++){
        let num = 0
        for(let j = i; j < n;j++){
            num += j
            if(num === n){
            count += 1
            } else if( num > n){
                break;
            }
        }
    }
    return count ;
}
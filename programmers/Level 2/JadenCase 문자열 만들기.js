function solution(s) {
        function makeUpperFirstword (word){
        return word.charAt(0).toUpperCase() + word.slice(1)
    }
    let arr = s.toLowerCase().split(' ');
    let result = ''
    for(let i = 0 ; i < arr.length ; i++){
       result = result + ' ' + makeUpperFirstword(arr[i])
    }
    return result.slice(1);
    
}
function solution(s){
    s = s.split("")
    if(s[0] !== '(' || s[s.length-1] !== ')') return false;
    let result = true
    function dis ( str){
        if(str === '(') return 1
        else return -1
    }
    let counter = 0
    for(let i = 0; i < s.length; i++){
        counter += dis(s[i])
        if(counter < 0){
            result = false;
            break;
        }
        
    }
    if(counter !==0){
        result = false
    }
    return result;
}
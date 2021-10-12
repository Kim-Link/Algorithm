function solution(citations) {
   citations = citations.sort((a,b) => b-a)
    let num = 0
    while(num <= citations.length){
        if(num + 1 <= citations[num]){
            num++
        } else {
            break;
        }
        
    }
    return num
    
}
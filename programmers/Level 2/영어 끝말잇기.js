function solution(n, words) {
    let countNum = 0
    let countTurn = 0
    let resultIndex = 0
    let arr = []
    for(let i = 1; i < words.length ; i++){
       let word1 = words[i -1]
       let word2 = words[i]
       arr.push(word1)
        if(resultIndex === 0){
            if(word2[0] !== word1[word1.length-1] || arr.includes(word2)){
            resultIndex = i;
            break;
            }   
        }
    }
    if(resultIndex > 0){
     countTurn = parseInt(resultIndex / n) + 1 
     countNum = (resultIndex + 1) % n || n
    }
    return [countNum, countTurn]
}
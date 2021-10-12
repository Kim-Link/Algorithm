function solution(name) {
    function codeNum(str){
        if(str === 'A'){return 0
        } else if (str === 'B' || str === 'Z'){ return 1
        } else if (str === 'C' || str === 'Y'){ return 2
        } else if (str === 'D' || str === 'X'){ return 3
        } else if (str === 'E' || str === 'W'){ return 4
        } else if (str === 'F' || str === 'V'){ return 5
        } else if (str === 'G' || str === 'U'){ return 6
        } else if (str === 'H' || str === 'T'){ return 7
        } else if (str === 'I' || str === 'S'){ return 8
        } else if (str === 'J' || str === 'R'){ return 9
        } else if (str === 'K' || str === 'Q'){ return 10
        } else if (str === 'L' || str === 'P'){ return 11
        } else if (str === 'M' || str === 'O'){ return 12
        } else if (str === 'N'){ return 13}
    }
    let result = 0;
    for( let i = 0 ; i < name.length ; i++){
        result = result + codeNum(name[i]);
    }
    
   let side=name.length-1;
    for(let i=1;i<name.length;i++){
        if(name[i]==='A'){
            for(var j=i+1;j<name.length;j++){
                if(name[j]!=='A') break;
            }
            const left=i-1;
            const right=name.length-j;
            side=Math.min(side,left>right ? left+right*2:left*2+right);
            i=j;
        } 
    }
    
    return result + side; 
}
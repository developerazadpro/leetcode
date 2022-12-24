var firstUniqChar = function(s) {
    const hasTable = {}
    for(let elm of s){        
        hasTable[elm] = (hasTable[elm] || 0) +1;
    }

    for(let i = 0; i < s.length; i++){
       if(hasTable[s[i]] == 1){
            return i;
        }   
    }
    return -1;
};

let s = "loveleetcode";
console.log(firstUniqChar(s));
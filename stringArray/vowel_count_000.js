function vowels(s){
    let totalVowel = 0;
    for(let char of s){
        console.log(char);
        if( char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u' ){
            totalVowel ++;
        }
    }
    return totalVowel;

}
console.log(vowels('education'));
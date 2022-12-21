function maxCharacterCount(string){
    //create flag variable
    const charMap = {};

    //looping through string and count string
    for(let char of string){
        charMap[char] = (charMap[char] || 0) + 1;
        // char => character, charMap[char] => char index
    }
    console.log(charMap)//{b:1, a:3, n:2}

    //finding the max 
    let max = 0
    let maxChar = ''
    for(let char in charMap){
        if(charMap[char] > max){
            max = charMap[char]
            maxChar = char
        }
    }
    return maxChar
}
console.log(maxCharacterCount('banana'));
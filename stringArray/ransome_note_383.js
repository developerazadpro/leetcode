var canConstruct = function(ransomNote, magazine) {
    const noteArray = ransomNote.split('');console.log(noteArray)
    const magazineArray = magazine.split('');console.log(magazineArray)

    const noteIsPossible = noteArray.every((word) => {
        const indexOfWord = magazineArray.indexOf(word); console.log(indexOfWord)
        if(indexOfWord > -1){
            magazineArray.splice(indexOfWord, 1);
            return true
        }
    })
    return noteIsPossible;
};
const ransomNote = 'aab';
const magazine = 'baa';
console.log(canConstruct(ransomNote, magazine));
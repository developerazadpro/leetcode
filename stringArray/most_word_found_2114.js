var mostWordsFound = function(sentences) {
    let maxWord = 0;
    for(const sentence of sentences){
        console.log(sentence);
        const words  = sentence.split(' ');console.log(words);
        maxWord = Math.max(maxWord, words.length);
    }
    return maxWord;
};
const sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"];
console.log(mostWordsFound(sentences));



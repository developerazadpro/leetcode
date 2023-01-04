var sortSentence = function(s) {
    let sortingSentence = s.split(' ').sort((a,b) => 
        a.substr(-1) - b.substr(-1)
    );//console.log(sortingSentence)
    sortingSentence = sortingSentence.map(word => 
        word.slice(0, -1)
    )
    return sortingSentence.join(' ');
};
s = "is2 sentence4 This1 a3";
console.log(sortSentence(s));
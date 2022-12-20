var isPalindrome = function(s) {
    
    //non alphanemeric character
    var regEx = /[\W_]/g;

    //actual string in lowercase without non alphanemeric character
    var orginalStr = s.toLowerCase().replace(regEx, '');

    //reverse string
    var reverseStr = orginalStr.split('').reverse().join('');
    
    //compare actual and reverse string
    if(reverseStr === orginalStr){
        return true;
    }
    return false;
    
    
};
console.log(isPalindrome('ma !@#$%^&*()_-m_'));
console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(' '));
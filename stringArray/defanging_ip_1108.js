var defangIPaddr = function(address) {
    return address.replaceAll('.', '[.]')
};
const address = "1.1.1.1";
console.log(defangIPaddr(address))
var interpret = function(command) {
    return res   = command.split('()').join('o').split('(al)').join('al');
};

const command = "G()()()()(al)";
console.log(interpret(command))
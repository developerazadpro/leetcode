var convertTemperature = function(celsius) {
    let kelvin = parseFloat(celsius) + 273.15;
    let farenhite = (1.80 * parseFloat(celsius)) + 32;
    return [kelvin, farenhite]
};
let celsius = 36.50;
console.log(convertTemperature(celsius))
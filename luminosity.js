var color1 = process.argv[2]*0.2126;
var color2 = process.argv[3]*0.7152;
var color3 = process.argv[4]*0.0722;

var luminosity = color1 + color2 + color3;
console.log(luminosity);


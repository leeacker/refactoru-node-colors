#!/usr/bin/env node



module.exports = {
	luminosity: function(red, green, blue){
		var color1 = red*0.2126;
		var color2 = green*0.7152;
		var color3 = blue*0.0722;

		var luminosity = color1 + color2 + color3;
		return luminosity;
	},
	darken: function(red, green, blue){
	var darkRed = red*0.8;
	var darkGreen = green*0.8;
	var darkBlue = blue*0.8;

	return darkRed + ' ' + darkGreen + ' ' + darkBlue;
	}
};
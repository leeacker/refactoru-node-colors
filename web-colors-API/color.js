var fs = require('fs');
var request = require('request');
var _ = require('underscore');
var pageBody;

request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function(error, response, body){
	
	var colorArray = JSON.parse(body);

	var lowerCaseArray = [];
	_.map(colorArray, function(contents, key){
		colorArray[key].name = colorArray[key].name.toLowerCase();
		lowerCaseArray.push(colorArray[key]);
	});
	

	var getValues = function(color){
		var thisColor = color.toLowerCase();
		console.log(thisColor);
		
		var matchColor = _.findWhere(lowerCaseArray, {name: thisColor});
		
		var red = matchColor.rgb.r;
		var green = matchColor.rgb.g;
		var blue = matchColor.rgb.b;

		return red + ' ' + green + ' ' + blue;
	};
	console.log(getValues(process.argv[2]));
	

});



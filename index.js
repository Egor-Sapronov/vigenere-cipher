var alphabet=function(){
	return ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',''];
};

var crypt = function(message, key, aplh){
	var tempKey='';

	while(tempKey.length<=message.length){
		tempKey=tempKey+key;
	};

	tempKey=tempKey.slice(0,message.length);

	var tempAlph=aplh();

	var result='';

	for (var i = 0; i < message.length; i++) {
		var Pi=tempAlph.indexOf(message[i]);
		var Ki=tempAlph.indexOf(tempKey[i]);

		var keyI=(Pi + Ki) % 27;

		result=result+tempAlph[keyI];
	};

	console.log(result);

	return result;
};

var decrypt = function(message, key, aplh){
	var tempKey='';

	while(tempKey.length<=message.length){
		tempKey=tempKey+key;
	};

	tempKey=tempKey.slice(0,message.length);

	var tempAlph=aplh();

	var result='';

	for (var i = 0; i < message.length; i++) {
		var Ci=tempAlph.indexOf(message[i]);
		var Ki=tempAlph.indexOf(tempKey[i]);

		var keyI=(Ci-Ki +27) % 27;

		result=result+tempAlph[keyI];
	};

	console.log(result);
};

var result = crypt('attackatdawn','lemon',alphabet);

decrypt(result,'lemon',alphabet);



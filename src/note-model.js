console.log('hello');

// function Note(string){
// 	this._text = string;
// }

// Note.prototype.returnText = function(){
// 	return this._text
// }

(function(exports) {
	var text = "";
	function addText(string){
	return text = string;
	}
	function returnText(){
	console.log(text)
  return text;
	}
	exports.returnText = returnText;
	exports.addText = addText;
})(this);

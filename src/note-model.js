console.log('hello');

// function Note(string){
// 	this._text = string;
// }

// Note.prototype.returnText = function(){
// 	return this._text
// }

(function(note) {
	// var text = "";
	function addText(string){
	return text = string;
	}
	function returnText(){
	console.log(text)
  return text;
	}
	note.returnText = returnText;
	note.addText = addText;
})(this);

(function(exports) {

	function Note(noteText) {
		this._content = noteText;
	}

	Note.prototype.getContent = function() {
		return exclaim(this._content);
	}

	exports.Note = Note;

})(this);

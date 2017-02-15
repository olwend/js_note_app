(function(exports){

  function NoteListView(notelist){
    this._listToDisplay = notelist._notes;
  }

  NoteListView.prototype.display = function(){
    var output = "";
    this._listToDisplay.forEach(function(note) {
      output += "<li>" + truncateTo20Chars(note._content) + "</li>"
    });

    return ("<ul>" + output + "</ul>");
  }

  function truncateTo20Chars(notecontent){
    var maxCharLength = 20;
    var myString = notecontent;
    return myString.substring(0,maxCharLength);
  }

  exports.NoteListView = NoteListView;

})(this)

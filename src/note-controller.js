(function(exports) {

function NoteController(notelist){
  this.list = notelist;
}

NoteController.prototype.displayNotes = function(){
  var elem = document.getElementById("app");
  notelistview = new NoteListView(this.list);
  elem.innerHTML = notelistview.display();
}

exports.NoteController = NoteController;

})(this)

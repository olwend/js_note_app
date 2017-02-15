

(function() {
  notelist = new NoteList();
  notelist.addNote("any old nonsense");
  notelist.addNote("more nonsense");
  notelistview = new NoteListView(notelist);

	assert.isTrue(notelistview.display() === "<ul><li>any old nonsense</li><li>more nonsense</li></ul>");
})();

(function() {
  notelist = new NoteList();
  notelist.addNote("more nonsense");
  notelistview = new NoteListView(notelist);

	assert.isTrue(notelistview.display() === "<ul><li>more nonsense</li></ul>");
})();

(function() {
  notelist = new NoteList();
  notelistview = new NoteListView(notelist);

	assert.isTrue(notelistview.display() === "<ul></ul>");
})();

(function() {

  function stringFill(char, numofTimes) {
    var s = '';
    while (s.length < numofTimes) s += char;
    return s;
  }

  notelist = new NoteList();
  notelist.addNote(stringFill("i",30));
  notelistview = new NoteListView(notelist);
	assert.isTrue(notelistview.display() === "<ul><li>" + stringFill("i",20) + "</li></ul>");
})();

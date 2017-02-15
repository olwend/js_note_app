
function init(){
  notelist = new NoteList();
  notecontroller = new NoteController(notelist);
  notelist.addNote("Favourite drink: Seltzer");
  notecontroller.displayNotes();
}

window.onload = init;

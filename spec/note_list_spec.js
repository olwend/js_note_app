function testNewNoteList(){
  var first = addText("cat");
  var second = addText("dog");
  addNoteList(first);
  addNoteList(second);
  if (checkArray() != 2) {
    throw new Error("notelist does not have the expected notes");
  }
};


testNewNoteList()

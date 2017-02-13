function testNewNoteList(){
  var first = addText("cat");
  var second = addText("dog");
  addNoteList(first);
  addNoteList(second);
  if (checkArray() != 2) {
    throw new Error("notelist is not expected length");
    }
 if (returnArray() != "cat") {
    throw new Error("notelist content is incorrect");
    }
};


testNewNoteList()

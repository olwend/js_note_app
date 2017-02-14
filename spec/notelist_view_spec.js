function testNotelistView(){
  var first = addText("Favourite food: pesto");
  var second = addText("Favourite drink: chianti");
  var third = addText("Favourite dessert: tiramisu");
  addNoteList(first);
  addNoteList(second);
  addNoteList(third);

  if (returnHTMLString().includes("chianti") == false) {
    throw new Error("list view is incomplete");
  }
};

testNotelistView()

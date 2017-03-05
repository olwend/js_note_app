function testNotelistView(){
  var first = addText("Favourite food: pesto");
  var second = addText("Favourite drink: chianti");
  addNoteList(first);
  addNoteList(second);
  console.log(returnHTMLString())
  if (returnHTMLString().includes("Favourite food: pesto</div></li><li><div>Favourite drink: chianti") == false) {
    throw new Error("list view is incomplete");
  }
};

testNotelistView();

console.log("test");

function testNewNote(string){
  addText(string);
  //returnText();
  if (returnText() != "earl grey") {
    throw new Error("note is not initialized");
  }
};

testNewNote("earl grey");

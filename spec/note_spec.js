console.log("test");

function testNewNote(){
  var note = new Note();
  if (note.returnText() !== nil) {
    throw new Error("note is not initialized");
  }

};

testNewNote();

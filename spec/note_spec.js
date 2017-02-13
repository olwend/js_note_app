console.log("test");

function testNewNote(string){
	addText(string)
    if (returnText() != string) {
    throw new Error("note is not initialized");
  }

};
testNewNote('Javascript is my favourite');

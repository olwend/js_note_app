(function(exports) {
  var notelist = [];
  function addNoteList(model){
    return notelist.push(model);
  }
  function checkArray(){
    console.log (notelist.length)
    return notelist.length;
  }
  function returnArray(){
    console.log(notelist)
    console.log(notelist[0])
    return notelist[0];
  }
  exports.addNoteList = addNoteList;
  exports.checkArray = checkArray;
  exports.returnArray = returnArray;
})(this);

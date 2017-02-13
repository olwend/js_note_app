(function(exports) {
  var notelist = [];
  function addNoteList(model){
    return notelist.push(model);
  }
  function checkArray(){
    console.log(notelist)
    console.log (notelist.length)
    return notelist.length;
  }
  exports.addNoteList = addNoteList;
  exports.checkArray = checkArray;
})(this);

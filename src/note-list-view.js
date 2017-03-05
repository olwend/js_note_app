(function(noteListView){
  function returnHTMLString(){
        return '<ul><li><div>' + getNoteList() + '</div></li></ul>'
  };
  noteListView.returnHTMLString = returnHTMLString;
  console.log(returnHTMLString)
})(this);

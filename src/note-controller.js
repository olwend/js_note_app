(function(exports) {

function noteController(){
  var elem = document.getElementById('app')
  elem.innerHTML = "howdy";
}

exports.noteController = noteController;

})(this)

window.onload = noteController

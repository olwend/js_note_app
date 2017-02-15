(function(exports) {

function NoteController(){
  var elem = document.getElementById("app")
  elem.innerHTML = "howdy";
}

exports.NoteController = NoteController;

})(this)

// var foo = "bar";
// console.log(foo);

//var notecontroller = NoteController;
// var NoteController = function NoteController(){
//         var elem = document.getElementById("app")
//         elem.innerHTML = "howdy";
//       };
// module.exports.NoteController = NoteController;
//console.log(notecontroller);

window.onload = NoteController;

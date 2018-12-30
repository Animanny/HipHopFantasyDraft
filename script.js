var urlabel = document.getElementById("urlabel");
var urpicks = urlabel.getElementsByTagName('li');
var theirlabel = document.getElementById("theirlabel");
var theirpicks = theirlabel.getElementsByTagName('li');
var myTurn = true;
urpick = 0;
theirpick = 0;


function addItem(id) {
  var element = document.getElementById(id);
  var i = 0;
  if (myTurn) {
    urpicks[urpick].innerHTML = "<p style='font-size:20px;'>" + id + "</p>";
    urpick++;
    myTurn = false;
  } else if (!myTurn) {
    while (urpicks[i].querySelector("p") == "") {
      i++;
    }
    theirpicks[theirpick].innerHTML = "<p style='font-size:20px;'>" + id + "</p>";
    theirpick++;
    myTurn = true;
  }

  element.parentNode.removeChild(element);
}

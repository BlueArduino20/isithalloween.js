function getDate() {
  var date = new Date();
  var d = date.getDate();
  var m = date.getMonth() + 1;
  return d.toString() + m.toString();
}

var currentDate = getDate();
	if (currentDate == "3110") {
		document.getElementById("yesno").innerHTML = "YES";
		document.getElementById("yesno").style.color = "#ff7400";
		document.getElementById("yesno").style.fontSize = "170";
	}
	else {
		document.getElementById("yesno").innerHTML = "NO";
	}
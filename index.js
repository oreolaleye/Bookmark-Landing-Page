

 function change1() {
    document.getElementById("slid-2").classList.remove("clicked")
    document.getElementById("slid-3").classList.remove("clicked")
    document.getElementById("slid-1").classList.add("clicked")
    document.getElementById("tile-2").classList.add("hide")
    document.getElementById("tile-3").classList.add("hide")
    document.getElementById("tile-1").classList.remove("hide");
}

 function change2() {
    document.getElementById("slid-1").classList.remove("clicked")
    document.getElementById("slid-3").classList.remove("clicked")
    document.getElementById("slid-2").classList.add("clicked")
    document.getElementById("tile-1").classList.add("hide")
    document.getElementById("tile-3").classList.add("hide")
    document.getElementById("tile-2").classList.remove('hide');
}

 function change3() {
    document.getElementById("slid-1").classList.remove("clicked")
    document.getElementById("slid-2").classList.remove("clicked")
    document.getElementById("slid-3").classList.add("clicked")
    document.getElementById("tile-1").classList.add("hide")
    document.getElementById("tile-2").classList.add("hide")
    document.getElementById("tile-3").classList.remove('hide');
}


function myFunction1() {
  var x = document.getElementById("hide-show-1");
  if (x.style.display === "none") {
  	document.getElementById("arrow-1").src="images/icon-arrow-2.svg"
  	document.getElementById("arrow-1").classList.add("rotate")
    x.style.display = "block";
  } else {
    x.style.display = "none";
    document.getElementById("arrow-1").classList.remove("rotate")
    document.getElementById("arrow-1").src="images/icon-arrow.svg"
  }
}

function myFunction2() {
  var x = document.getElementById("hide-show-2");
  if (x.style.display === "none") {
  	document.getElementById("arrow-2").src="images/icon-arrow-2.svg"
  	document.getElementById("arrow-2").classList.add("rotate")
    x.style.display = "block";
  } else {
    x.style.display = "none";
    document.getElementById("arrow-2").classList.remove("rotate")
    document.getElementById("arrow-2").src="images/icon-arrow.svg"
  }
}

function myFunction3() {
  var x = document.getElementById("hide-show-3");
  if (x.style.display === "none") {
  	document.getElementById("arrow-3").src="images/icon-arrow-2.svg"
  	document.getElementById("arrow-3").classList.add("rotate")
    x.style.display = "block";
  } else {
    x.style.display = "none";
    document.getElementById("arrow-3").classList.remove("rotate")
    document.getElementById("arrow-3").src="images/icon-arrow.svg"
  }
}

function myFunction4() {
  var x = document.getElementById("hide-show-4");
  if (x.style.display === "none") {
  	document.getElementById("arrow-4").src="images/icon-arrow-2.svg"
  	document.getElementById("arrow-4").classList.add("rotate")
    x.style.display = "block";
  } else {
    x.style.display = "none";
    document.getElementById("arrow-4").classList.remove("rotate")
    document.getElementById("arrow-4").src="images/icon-arrow.svg"
  }
}

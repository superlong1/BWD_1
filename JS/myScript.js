function hideMenu () {
	var icon = document.getElementById("iconShow");
	var navi = document.getElementById("navi");
	icon.setAttribute("style", "display:none;");
	navi.classList.remove("hide");
}

function showMenu () {
	var icon = document.getElementById("iconShow");
	var navi = document.getElementById("navi");
	icon.setAttribute("style" , "display:block;");
	navi.classList.add("hide");
}
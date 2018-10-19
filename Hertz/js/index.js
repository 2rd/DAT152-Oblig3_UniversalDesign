function showMenu(){
	var elem = document.getElementById("mobile-menu");
	elem.setAttribute("style","width:200px; border-left: 1px solid #f4d142;")

    setTimeout(function(){	
		showMenuContent();
	},300)
	
}

function hideMenu(){
	var elem = document.getElementById("mobile-menu");
	elem.setAttribute("style","width:0px; border-left: 1px solid black" )
		hideMenuContent();

}



function showMenuContent(){
	var elem = document.getElementById("menu-content-wrapper");
	elem.setAttribute("style", "opacity: 1")
	var elem = document.getElementById("mobile-menu-list");
	elem.setAttribute("style", "opacity: 1")
}

function hideMenuContent(){
	var elem = document.getElementById("mobile-menu-list");
	elem.setAttribute("style", "opacity: 0")
}

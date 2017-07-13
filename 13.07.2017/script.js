var a=document.querySelectorAll("img")



	for(var i=0;i<a.length;i++){
		a[i].addEventListener("click",func)
	}

	
	function func(){
	
	
	for(var i=0;i<a.length;i++){
		a[i].style.zIndex =0;
		

	}
	// this.style.left=0;
	this.style.zIndex =1;

	
}

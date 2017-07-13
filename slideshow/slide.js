
// var a=document.querySelectorAll(".foto")
// 	for(var i=0;i<a.length;i++){
// 		a[i].addEventListener("click",func)
// 	}

	
// 	function func(){

// 	this.style.background = "yellow"
// 	}
// var a=document.querySelector(".foto");

	
// 	a.addEventListener("click",myfunc);

var modal = document.getElementById('myModal');


var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;

}
var span=document.getElementsByClassName("close")[0]
span.onclick=function(){
	modal.style.display = "none"
}
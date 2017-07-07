// var i=0;
// var img=[];
// var time=1000;

// img["cimbom.jpg","cimbom1.jpg","cimbom2.jpg"];

// function slide(){
// 	document.slide.src=img[i];

// 	if (i<img.length-1){
// 		i++;
// 	}
// 	else{
// 		i=0;
// 		setTimeout("slide" time);
// 	}
	
// }
// 		window.onload=slide


var image=document.getElementsByTagName("img")[0];
var sliders=["cimbom.jpg","cimbom1.jpg","cimbom2.jpg"];
count=0;
function sol() {
	image.setAttribute("src",sliders[count]);
	count--;
	if (count<0) {
		count=sliders.length-1;
	}
	console.log(count)

}

function sag() {
	image.setAttribute("src", sliders[count]);
	count++;
	if (count>=sliders.length) {
		count=0;
	}
	console.log(count);
}


clientWidth=document.querySelector(".item").clientWidth;
iteration=0;

function right(){
iteration-=clientWidth;
if (iteration<-3200) {
iteration=0;
}

document.querySelector(".imgSlide").style.left=iteration+"px";
console.log(iteration);
}

function left(){
iteration+=clientWidth;
if(iteration>0){
iteration=-3200;
}

document.querySelector(".imgSlide").style.left=iteration+"px";
console.log(iteration);
}
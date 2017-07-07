
	function gallery(width,height,boxCount,margin) {
	

	  var gallery=document.createElement("div");
	  document.body.appendChild(gallery)
	  gallery.setAttribute("class", "gallery")

	for (i=0; i<boxCount;i++){
		a=Math.floor(Math.random() * 60);
		b=Math.floor(Math.random() * 60);
		c=Math.floor(Math.random() * 60);
		var item = document.createElement("div");
	    item.setAttribute("class","box")
	    gallery.appendChild(item)
	    item.style.width=width+"px";
	    item.style.height=height+"px"
	    item.style.margin=margin+"px";
	    item.style.background="rgb("+a+","+b+","+c+")";


	}
}
gallery(30,30,500,10)
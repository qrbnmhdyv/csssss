 // var myClas=document.getElementsByClassName("clas");
 // count=true;
 // function myFunc(){
		
 // 	if(count){
	// 	myClas.setAttribute("style", "background: red")
	// 	count=false;
	// }
	
 // 	else{
 // 		myClas.setAttribute("style", "background: red")
 // 		count=true;
 // 	}
 // }
 function turn(){


	count=0;
   		
	var myClas=document.getElementsByClassName("clas")[0]
 	 if(count%2==0){
   myClas.setAttribute("style", "background:red")
      		count=count+1;

 		console.log(count);
  }
  else{
  	myClas.setAttribute("style", "background:yellow")
	count++;
	console.log(count);

  }
}
  
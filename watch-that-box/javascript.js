  var size = 250;
  var box = document.getElementById("box");
box.addEventListener("wheel", function(event){
  if(event.deltaY < 0){
    size = size * 1.25;
  } else{
      size = size / 1.25;
  }
  box.style.height = size+"px"; 
  box.style.width = size+"px";
});

document.getElementById("grow").addEventListener("click", bigger);

//document.getElementById("grow").addEventListener("click", function(){
  //box.style.height = size+"px"; 
 // box.style.width = size+"px";
 //size = size * 1.25;
//}); 


document.getElementById("blue").addEventListener("click", function(e){
  console.log(e);
  box.style.backgroundColor = "blue";
});

document.getElementById("fade").addEventListener("click", function(){
  box.style.opacity = "0.5";
});

document.getElementById("reset").addEventListener("click", function(){
  box.style.height = "150px"; 
  box.style.width = "150px";
  box.style.backgroundColor = "orange";
  box.style.opacity = "1.0";
  size = 250;
});

function bigger()
{
  box.style.height = size+"px"; 
  box.style.width = size+"px";
  size = size * 1.25;    
  };

 
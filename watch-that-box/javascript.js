  var size = 250;
  var box = document.getElementById("box");
  var p = document.getElementById("color-identifier");
  var opaque = 1.0;
  var colors = ["Blue", "Green", "Red", "Black", "Orange", "Peru", "Aqua", "Lime", "Purple", "Gold"];
  var i = 5;
  p.innerHTML = colors[i];


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


document.getElementById("color").addEventListener("click", function(){
  i = Math.floor(Math.random() * 10); 
  console.log(i);
  box.style.backgroundColor = colors[i];
  p.innerHTML = colors[i];
});

document.getElementById("fadeOut").addEventListener("click", function(){
  opaque = opaque - 0.1;
  box.style.opacity = opaque;
});

document.getElementById("fadeIn").addEventListener("click", function(){
  opaque = opaque + 0.1
  box.style.opacity = opaque;
});

document.getElementById("reset").addEventListener("click", function(){
  box.style.height = "150px"; 
  box.style.width = "150px";
  box.style.backgroundColor = "orange";
  box.style.opacity = "1.0";
  size = 250;
  opaque = 1.0;
  i = 5;
  p.innerHTML = colors[i];
});

function bigger()
{
  box.style.height = size+"px"; 
  box.style.width = size+"px";
  size = size * 1.25;    
  };

 
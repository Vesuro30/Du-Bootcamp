  var size = 250;
  var box = document.getElementById("box");
document.getElementById("grow").addEventListener("click", function(){
  box.style.height = size+"px"; 
  box.style.width = size+"px";
  size = size * 1.25;
});

document.getElementById("blue").addEventListener("click", function(){
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
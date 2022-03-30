  var size = 250;
  var box = document.getElementById("box");
  var p = document.getElementById("color-identifier");
  var opaque = 1.0;
  //var colors = ["Blue", "Green", "Red", "Black", "Orange", "Peru", "Aqua", "Lime", "Purple", "Gold"];
  //var i = 5;
  //p.innerHTML = colors[i];


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


/* document.getElementById("color").addEventListener("click", function(){
  i = Math.floor(Math.random() * 10); 
  console.log(i);
  box.style.backgroundColor = colors[i]; 
  p.innerHTML = colors[i];
});*/

document.getElementById("randomColor").addEventListener("click", function(){
  box.style.backgroundColor = generateRandomColor();
});

document.getElementById("fadeOut").addEventListener("click", function(){
  if(opaque > 0){
    opaque = opaque - 0.1;
    box.style.opacity = opaque;
}
});

document.getElementById("fadeIn").addEventListener("click", function(){
  if(opaque < 1){
    opaque = opaque + 0.1
    box.style.opacity = opaque;  
  }
});

document.getElementById("reset").addEventListener("click", function(){
  box.style.height = "150px"; 
  box.style.width = "150px";
  box.style.backgroundColor = generateRandomColor();
  box.style.opacity = "1.0";
  size = 250;
  opaque = 1.0;
  //i = 5;
  //p.innerHTML = colors[i];
});

function bigger()
{
  box.style.height = size+"px"; 
  box.style.width = size+"px";
  size = size * 1.25;    
  };

 
  function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return "#"+randColor.toUpperCase();
  }



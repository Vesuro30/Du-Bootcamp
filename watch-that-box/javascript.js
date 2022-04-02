  var size = 150;
  var box = document.getElementById("box");
  var p = document.getElementById("color-identifier");
  var opaque = 1.0;
  var maxup = 1000;
  var maxdn = 15;
  //var colors = ["Blue", "Green", "Red", "Black", "Orange", "Peru", "Aqua", "Lime", "Purple", "Gold"];
  //var i = 5;
  //p.innerHTML = colors[i];


box.addEventListener("wheel", function(event){
  if(event.deltaY < 0){
    resize("up");
  } else{
      resize("down");
  }

});

 document.getElementById("grow").addEventListener("click", function(){
  /*size = size * 1.25; */
  resize("up");
/*box.style.height = size+"px"; 
  box.style.width = box.style.height; */
}); 

document.getElementById("shrink").addEventListener("click", function(){
  resize("down");
});

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
  if(opaque > 0.09){
    opaque = opaque - 0.05;
    box.style.opacity = opaque;  
}     
  else { 
    alert("You cannot fade out further!");
    }   
});

document.getElementById("fadeIn").addEventListener("click", function(){
  if(opaque < 1){
    opaque = opaque + 0.05
    box.style.opacity = opaque;  
}  
  else {
    alert("The box has reached its full opacity!");
    } 
});

document.getElementById("reset").addEventListener("click", function(){
  box.style.height = "150px"; 
  box.style.width = "150px";
  box.style.backgroundColor = generateRandomColor();
  box.style.opacity = "1.0";
  size = 150;
  opaque = 1.0;
  //i = 5;
  //p.innerHTML = colors[i];
});
 
  function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16,777,215 Different colors!
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return "#"+randColor.toUpperCase();
 };

function resize(direction)
{
  if(direction == "up"){
    if(size < maxup){
      size = size * 1.25;
    } 
    else {
          alert("The box cannot grow larger!");
    }   
    } 
  else {
      if(size > maxdn){
        size = size / 1.25;
    } 
      else {
          alert("The box is too small already!");
    }
  }
  box.style.height = size+"px"; 
  box.style.width = box.style.height;
};


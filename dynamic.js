let colors=["red","pink","orange","green"];

// let h1=document.getElementById("i");
// h1.innerHTML=`My favourite color is ${colors[3]}`;
let ul=document.getElementById("i");

for(let color of colors) {
   ul.innerHTML+=`<li>${color}</li>
    
   `
}





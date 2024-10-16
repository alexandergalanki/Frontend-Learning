var on=document.querySelector("#bulb");
var btn=document.querySelector("#btn");
btn.addEventListener("click",()=>{
    console.log(on);
    on.style.backgroundColor="yellow";
    console.log("btn");
    
})
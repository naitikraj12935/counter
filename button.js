

const colorchange = () =>{

    let val="0123456789ABCDEF";
    let val1="#";
    for(let i=0;i<6;i++)
    {
        val1=val1 + val[Math.floor(Math.random()*16)]
    }
    return val1;
}
console.log(colorchange());
function addition() 
{
    document.body.style.backgroundColor=colorchange();
    let j=document.querySelector("#button")
   let res=Number(j.innerText) +1;
   j.innerText=res;
   
    
}
function minus() 
{
    document.body.style.backgroundColor=colorchange();
    let j=document.querySelector("#button")
   let res=Number(j.innerText) -1;
   j.innerText=res;
   
    
}
function reseter() 
{
    document.body.style.backgroundColor="white";
    let j=document.querySelector("#button")
   let res=Number(j.innerText) *0;
   j.innerText=res;
   
    
}



const subtract=document.getElementById("sub")

subtract.addEventListener("click",minus);

const sum=document.getElementById("add");
sum.addEventListener("click",addition);

const zero=document.getElementById("reset");
zero.addEventListener("click",reseter);

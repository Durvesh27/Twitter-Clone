function displayBlock(){
    var a=document.getElementById("verify");
    var b=document.getElementById("display");
    var c=document.getElementById("main");
    if(b.style.display==="none"){
        b.style.display="block";
        c.style.background="rgb(203, 202, 202)";
        c.style.opacity="0.5";
    }
    else{
        b.style.display="none"; 
        c.style.background="white"; 
        c.style.opacity="1";
    }
}
displayBlock()
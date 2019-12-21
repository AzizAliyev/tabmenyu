 function opentab(webname){
    var content=document.getElementsByClassName("tabtex")
    for(i=0;i<content.length;i++){
        content[i].style.display="none"
    }
    document.getElementById(webname).style.display="block"

 }


var acc=document.getElementsByClassName("accord");
var i;
for(i=0;i<acc.length;i++){
    acc[i].addEventListener('click',function(){
        var panel1=this.nextElementSibling;
        if(panel1.style.display=="block"){
            panel1.style.display="none";
        }
        else{
            panel1.style.display="block"
        }
    })
}

let up=document.getElementById("up");
let features =document.getElementById("features");
let box =document.getElementsByClassName("box");
let definition =document.getElementById("definition");
let show=document.getElementById("show");
let list=document.getElementById("list");
let price=document.getElementById("price");
let card=document.getElementsByClassName("plan-price")
let customer=document.getElementById("customer");
let person=document.getElementsByClassName("person");
let downloading=document.getElementById("downloading");
let download =document.getElementsByClassName("download");


window.onscroll = function(){
if(this.scrollY>200){
    up.classList.add("show");
}else{
    up.classList.remove("show");
};
if(window.scrollY>features.offsetTop){
    for(i=0;i<box.length;i++){
        box[i].classList.add("one");
    }
   
}else{
    for(i=0;i<box.length;i++){
        box[i].classList.remove("one");
    }
};
if(window.scrollY>definition.offsetTop){
    show.classList.add("visipal");
    list.classList.add("notscale");
}else{
    show.classList.remove("visipal");
    list.classList.remove("notscale");
}
if(window.scrollY>price.offsetTop){
    for(i=0;i<card.length;i++){
        card[i].classList.add("plann-price")
    }
  
}else{
    for(i=0;i<card.length;i++){
        card[i].classList.remove("plann-price")
    }
}
if(window.scrollY>customer.offsetTop-100){
     
    for(i=0;i<person.length;i++){
        person[i].classList.add("personn")
    }
}else{
    
    for(i=0;i<person.length;i++){
        person[i].classList.remove("personn")
    }
}
}


up.onclick=function(){
    window.scrollTo({
        top:0,
    });
}



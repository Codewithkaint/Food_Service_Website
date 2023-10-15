
// localStorage.clear()
document.getElementById('vbt').addEventListener('click',function(){

  document.getElementById('thankYou').style.visibility='visible'
  document.getElementById('thankYou').style.top='50%'
  document.getElementById('thankYou').style.transform='translate(-50%,-50%)scale(1)'
  document.getElementById('thankbtn').addEventListener('click',function () {
    document.getElementById('thankYou').style.visibility='hidden'
  })
  
    
}) 
document.querySelector('#odbtn').addEventListener('click',function(){
  if(localStorage.getItem('Num')==undefined){
     
document.getElementById('all').style.display='block'

document.getElementById('exampleInputPassword1').value=" "

document.getElementById('adds').value=""
document.getElementById('exampleFormControlInput1').value=""
document.getElementById('exampleFormControlTextarea1').value=" "
setInterval(() => {
  document.getElementById('all').style.display='none'

    
  
  }, 4000);
}  

else{
  document.getElementById('exampleFormControlTextarea1').innerHTML=food;


}
})
let fName=localStorage.getItem('Name');
    let fInfo=localStorage.getItem('Feed');
    let inName=document.getElementById('feedna')
    let inInfo=document.getElementById('feedin')
    inName.children[1].innerText=fName
    inInfo.innerText=fInfo
let lorem="Matar paneer has to be one of most popular paneer recipes. This Dhaba style Paneer recipe made with Paneer (Indian Cottage cheese) and Matar (Peas) in onion and tomato masala with simple spices. In this post I am sharing this easy recipe for Punjabi matar paneer. you can make this sabji in 20 Minutes.  "
localStorage.setItem('Name','Aman')
localStorage.setItem('Feed',lorem)
let social=document.querySelectorAll('.social a');
let i=0;

Array.from(social).forEach(function(element) {
   
    element.style.animation=` moves .3s ease-in-out forwards ${i/9+0.3}s `;
   i++;
  });
  let mins=document.getElementById('mins')
  let secs=document.getElementById('secs')
let sec=60;
let min=48;

  setInterval(() => {
  secs.innerText=sec--;
  
  if(sec==0){
    min--;
    sec=60;
    
  }mins.innerText=min;
  
  }, 1000);

  document.getElementById('feedBtn').addEventListener('click',function(){
    localStorage.clear()
    inName.children[1].innerText=fName
    inInfo.innerText=fInfo
})
let food=[]

document.getElementById('Pan').addEventListener('click',function(){
  
food.push('Paneer')
})
let Pak=document.querySelector('#Pak').addEventListener('click',function(){
  
  food.push('Pakoda')
})
let San=document.querySelector('#San').addEventListener('click',function(){
  food.push('SandWich')
})
let Noo=document.querySelector('#Noo').addEventListener('click',function(){
  food.push('Noodle')
})
let Cak=document.querySelector('#Cak').addEventListener('click',function(){
  food.push('Cake')
})
let Pas=document.querySelector('#Pas').addEventListener('click',function(){
  food.push('Pasta')
})
let Cho=document.querySelector('#Cho').addEventListener('click',function(){
food.push('Chola')
})
let Dos=document.querySelector('#Dos').addEventListener('click',function(){
  food.push('Dosa')

})
let Swe=document.querySelector('#Swe').addEventListener('click',function(){
  food.push('Sweets')

})


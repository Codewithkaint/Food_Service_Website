
    localStorage.clear();


  document.querySelector('.box').addEventListener('mousemove', function(e){
    document.body.style.backgroundColor = `rgb(${e.offsetY}, ${e.offsetX},254)`;})
    let feedInp=document.querySelector('.inp');
    let feedInfo=document.querySelector('.texts');
    let strName
    let strInfo
    document.getElementById('subBtn').addEventListener('click',function(){
    
    strName=feedInp.value;
 
    strInfo=feedInfo.value;
    localStorage.setItem('Name',strName);
    localStorage.setItem('Feed',strInfo);
    feedInp.value=" "
    feedInfo.value=" "
})
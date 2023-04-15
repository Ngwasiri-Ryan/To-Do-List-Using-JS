//lets get our objects
let input= document.querySelector('#add');
let btn = document.querySelector("#btn");
let list = document.querySelector("#list");
let el= document.getElementsByTagName("li");

//funtion to add a new item on the list as button is clicked
btn.addEventListener('click', function(){
  let txt= input.value;
  if(txt === ""){
    arlert('Please you must write something');
  }
  else{
    let li= document.createElement('li');
    li.innerHTML=txt;
    list.insertBefore(li, list.childNodes[0]);
    input.value=' ';
  }
});

//functions allowing us mark the done subject
list.addEventListener('click', function(e){
     if(e.target.tagName =="LI"){
        e.target.classList.toggle("checked");
     }





});


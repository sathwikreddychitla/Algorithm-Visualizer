function swap(h1, h2){
  let temp=h1.style.height;
  h1.style.height=h2.style.height;
  h2.style.height=temp;
}

function disableSorting(){
  document.querySelector(".bubbleSort").disabled=true;
  document.querySelector(".selectionSort").disabled=true;
  document.querySelector(".insertionSort").disabled=true;
  document.querySelector(".quickSort").disabled=true;
  document.querySelector(".mergeSort").disabled=true;
}

function enableSorting(){
  document.querySelector(".bubbleSort").disabled=false;
  document.querySelector(".selectionSort").disabled=false;
  document.querySelector(".insertionSort").disabled=false;
  document.querySelector(".quickSort").disabled=false;
  document.querySelector(".mergeSort").disabled=false;
}

function disableSizeBar(){
  document.querySelector("#size_input").disabled=true;
}

function enableSizeBar(){
  document.querySelector("#size_input").disabled=false;
}

function disableNewArray(){
  document.querySelector(".newArray").disabled=true;
}

function enableNewArray(){
  document.querySelector(".newArray").disabled=false;
}

function speed_anime(delay){
  return new Promise(resolve=> {
    setTimeout(()=>{resolve('')},delay);
  })
}

let array_size=document.querySelector("#size_input");
let array_speed=document.querySelector("#speed_input");
let new_array=document.querySelector(".newArray");
let home=document.querySelector(".home_");
let array=[],delay=270;

document.querySelector(".array_size").innerHTML=array_size.value;
document.querySelector(".array_speed").innerHTML=array_speed.value;

array_size.addEventListener('input',()=>{
  document.querySelector(".array_size").innerHTML=array_size.value;
  createNewArray(parseInt(array_size.value));
})

array_speed.addEventListener('input',()=>{
  document.querySelector(".array_speed").innerHTML=array_speed.value;
  delay=320 - parseInt(array_speed.value);
})

new_array.addEventListener('click',()=>{
  createNewArray(array_size.value);
  enableSorting();
  enableSizeBar();
})

function createNewArray(no_of_bars=60){

  deleteElements();

  array = [];

  for(let i=0;i<no_of_bars;i++){
    array.push(Math.floor( Math.random() * 250 ) +1);
  }

  const bars=document.querySelector("#bars");

  for(let i=0;i<no_of_bars;i++){
    const bar=document.createElement("div");
    bar.style.height=`${array[i]*2}px`;
    bar.classList.add('bar');
    bar.classList.add('flex-item');
    bar.classList.add(`barNo${i}`);
    bars.appendChild(bar);
  }


}

createNewArray();

function deleteElements(){
  let bars=document.querySelector("#bars");
  bars.innerHTML=''
}

function openCity(evt,cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openCity1(evt,cityName) {
  var i, tabcontent1, tablinks1;
  tabcontent1 = document.getElementsByClassName("tabcontent1");
  for (i = 0; i < tabcontent1.length; i++) {
    tabcontent1[i].style.display = "none";
  }
  tablinks1 = document.getElementsByClassName("tablinks1");
  for (i = 0; i < tablinks1.length; i++) {
    tablinks1[i].className = tablinks1[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openCity2(evt,cityName) {
  var i, tabcontent2, tablinks2;
  tabcontent2 = document.getElementsByClassName("tabcontent2");
  for (i = 0; i < tabcontent2.length; i++) {
    tabcontent2[i].style.display = "none";
  }
  tablinks2 = document.getElementsByClassName("tablinks2");
  for (i = 0; i < tablinks2.length; i++) {
    tablinks2[i].className = tablinks2[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openCity3(evt,cityName) {
  var i, tabcontent3, tablinks3;
  tabcontent3 = document.getElementsByClassName("tabcontent3");
  for (i = 0; i < tabcontent3.length; i++) {
    tabcontent3[i].style.display = "none";
  }
  tablinks3 = document.getElementsByClassName("tablinks3");
  for (i = 0; i < tablinks3.length; i++) {
    tablinks3[i].className = tablinks3[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openCity4(evt,cityName) {
  var i, tabcontent4, tablinks4;
  tabcontent4 = document.getElementsByClassName("tabcontent4");
  for (i = 0; i < tabcontent4.length; i++) {
    tabcontent4[i].style.display = "none";
  }
  tablinks4 = document.getElementsByClassName("tablinks4");
  for (i = 0; i < tablinks4.length; i++) {
    tablinks4[i].className = tablinks4[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function openCity5(evt,cityName) {
  var i, tabcontent5, tablinks5;
  tabcontent5 = document.getElementsByClassName("tabcontent5");
  for (i = 0; i < tabcontent5.length; i++) {
    tabcontent5[i].style.display = "none";
  }
  tablinks5 = document.getElementsByClassName("tablinks5");
  for (i = 0; i < tablinks5.length; i++) {
    tablinks5[i].className = tablinks5[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

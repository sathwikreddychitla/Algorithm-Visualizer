function swap(h1, h2){
  let temp=h1.innerHTML;
  h1.innerHTML=h2.innerHTML;
  h2.innerHTML=temp;
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

let newArray = document.querySelector("#newArray");
let size_input = document.querySelector("#size_input");
let speed_input = document.querySelector("#speed_input");
let delay=(320-parseInt(speed_input.value))*3,array=[];

document.querySelector(".array_size").innerHTML=size_input.value;
document.querySelector(".array_speed").innerHTML=speed_input.value;

size_input.addEventListener('input', function(){
  document.querySelector(".array_size").innerHTML=size_input.value;
  createNewArray(size_input.value);
})

speed_input.addEventListener('input', function(){
  document.querySelector(".array_speed").innerHTML=speed_input.value;
  delay = (320 - parseInt(speed_input.value))*3;
})

newArray.addEventListener('click', function(){
  createNewArray(size_input.value);
})

function createNewArray(no_of_bars){

  deleteElements();

  array=[];

  for(let i=0;i<no_of_bars;i++){
    array.push(Math.floor(Math.random() * 250)+1);
  }

  const bars = document.querySelector("#bars");
  const bars_ = document.querySelector("#bars_");
  const _bars = document.querySelector("#_bars");
  if(no_of_bars<=22){
    for(let i=0;i<no_of_bars;i++){
      const bar = document.createElement("div");
      bar.style.height="60px";
      bar.classList.add("bar");
      bar.classList.add("flex-item");
      bar.classList.add(`barNo${i}`);
      bar.innerHTML=array[i];
      bars.appendChild(bar);
    }
  }
  else if(no_of_bars<=50){
    for(let i=0;i<no_of_bars/2;i++){
      const bar = document.createElement("div");
      bar.style.height="60px";
      bar.classList.add("bar");
      bar.classList.add("flex-item");
      bar.classList.add(`barNo${i}`);
      bar.innerHTML=array[i];
      bars.appendChild(bar);
    }

    for(let i=Math.ceil(no_of_bars/2);i<no_of_bars;i++){
      const bar_ = document.createElement("div");
      bar_.style.height="60px";
      bar_.classList.add("bar");
      bar_.classList.add("flex-item");
      bar_.classList.add(`barNo${i}`);
      bar_.innerHTML=array[i];
      bars_.appendChild(bar_);
    }
  }
  else{
    for(let i=0;i<no_of_bars/3;i++){
      const bar = document.createElement("div");
      bar.style.height="60px";
      bar.classList.add("bar");
      bar.classList.add("flex-item");
      bar.classList.add(`barNo${i}`);
      bar.innerHTML=array[i];
      bars.appendChild(bar);
    }
    for(let i=Math.floor(no_of_bars/3);i<(no_of_bars-Math.floor(no_of_bars/3));i++){
      const bar_ = document.createElement("div");
      bar_.style.height="60px";
      bar_.classList.add("bar");
      bar_.classList.add("flex-item");
      bar_.classList.add(`barNo${i}`);
      bar_.innerHTML=array[i];
      bars_.appendChild(bar_);
    }
    for(let i=(no_of_bars-Math.floor(no_of_bars/3));i<no_of_bars;i++){
      const _bar = document.createElement("div");
      _bar.style.height="60px";
      _bar.classList.add("bar");
      _bar.classList.add("flex-item");
      _bar.classList.add(`barNo${i}`);
      _bar.innerHTML=array[i];
      _bars.appendChild(_bar);
    }
  }

}

createNewArray(12);

function deleteElements(){
  let bars = document.querySelector("#bars");
  let bars_ = document.querySelector("#bars_");
  let _bars = document.querySelector("#_bars");

  bars.innerHTML='';
  bars_.innerHTML='';
  _bars.innerHTML='';

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

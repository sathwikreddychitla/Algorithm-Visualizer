function disableButtons(){
  linear.disabled=true;
  binary.disabled=true;
}

function disableNewArray(){
  new_array.disabled=true;
}

function disableInput(){
  document.querySelector('input').value='';
  num.disabled=true;
}

function disableBar(){
  array_size.disabled=true;
}

function enableButtons(){
  linear.disabled=false;
  binary.disabled=false;
}

function enableNewArray(){
  new_array.disabled=false;
}

function enableInput(){
  document.querySelector('input').value='';
  num.disabled=false;
}

function enableBar(){
  array_size.disabled=false;
}

function speed_anime(delay){
  return new Promise(resolve => {
    setTimeout(()=>{resolve('')},delay);
  });
}

let search_display=document.querySelector('.search_display');
let searching_text=document.querySelector('.searching_text');
let result_text=document.querySelector('.result_text');
let searching_for=document.querySelector('.searching_for');
let result_for=document.querySelector('.result_for');
let searching_display=document.querySelector('.searching_display');
let result_display=document.querySelector('.result_display');
let num=document.querySelector('.num');
let linear=document.querySelector('.linear');
let binary=document.querySelector('.binary');
let index=document.querySelector('.index');
let index_text=document.querySelector('.index_text');
let array_size=document.querySelector('#size_input');
let array_speed=document.querySelector('#speed_input');
let new_array=document.querySelector('.newArray');
let array=[],delay=550;

document.querySelector('.array_size').innerHTML=array_size.value;
document.querySelector('.array_speed').innerHTML=array_speed.value;

array_size.addEventListener('input', function(){
  document.querySelector('.array_size').innerHTML=array_size.value;
  createNewArray(parseInt(array_size.value));
})
array_speed.addEventListener('input', function(){
  document.querySelector('.array_speed').innerHTML=array_speed.value;
  delay=600-parseInt(array_speed.value);
})

new_array.addEventListener('click', function(){
  createNewArray(parseInt(array_size.value));
})

function createNewArray(no_of_bars=32){

  deleteElements();

  array=[];

  for(let i=0;i<no_of_bars;i++){
    array.push(Math.floor(Math.random() * 250) + 1);
  }

  for(let i=0;i<no_of_bars/2;i++){
    const bar=document.createElement("div");
    bar.style.height="60px";
    bar.classList.add('bar');
    bar.classList.add('flex-item');
    bar.classList.add(`barNo${i}`);
    bar.innerHTML=array[i];
    bars.appendChild(bar);
  }
  for(let i=Math.ceil(no_of_bars/2);i<no_of_bars;i++){
    const bar=document.createElement("div");
    bar.style.height="60px";
    bar.classList.add('bar_');
    bar.classList.add('flex-item');
    bar.classList.add(`barNo${i}`);
    bar.innerHTML=array[i];
    bars_.appendChild(bar);
  }
}

createNewArray(parseInt(array_size.value));

function deleteElements(){
  let bars=document.querySelector("#bars");
  let bars_=document.querySelector("#bars_");
  bars_.innerHTML='';
  bars.innerHTML='';
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

function openCity_(evt,cityName) {
  var i, tabcontent_, tablinks_;
  tabcontent_ = document.getElementsByClassName("tabcontent_");
  for (i = 0; i < tabcontent_.length; i++) {
    tabcontent_[i].style.display = "none";
  }
  tablinks_ = document.getElementsByClassName("tablinks_");
  for (i = 0; i < tablinks_.length; i++) {
    tablinks_[i].className = tablinks_[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

function _openCity(evt,cityName) {
  var i, _tabcontent, _tablinks;
  _tabcontent = document.getElementsByClassName("_tabcontent");
  for (i = 0; i < _tabcontent.length; i++) {
    _tabcontent[i].style.display = "none";
  }
  _tablinks = document.getElementsByClassName("_tablinks");
  for (i = 0; i < _tablinks.length; i++) {
    _tablinks[i].className = _tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

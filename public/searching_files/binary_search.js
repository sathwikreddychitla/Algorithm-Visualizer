async function binary_search(){
  let elements = document.querySelectorAll(".bar");
  let elements_ = document.querySelectorAll(".bar_");
  let _flag=0;
  let _array = new Array(elements.length+elements_.length);
  for(let i=0;i<elements.length;i++){
    _array[i]=parseInt(elements[i].innerHTML);
  }
  for(let i=0;i<elements_.length;i++){
    _array[elements.length+i]=parseInt(elements_[i].innerHTML);
  }
  for(let i=0;i<_array.length-1;i++){
    for(let j=0;j<_array.length-i-1;j++){
      if(_array[j]>_array[j+1]){
        let temp=_array[j];
        _array[j]=_array[j+1];
        _array[j+1]=temp;
      }
    }
  }

  await speed_anime(500);
  for(let i=0;i<elements.length;i++){
    elements[i].innerHTML=_array[i];
  }
  for(let i=0;i<elements_.length;i++){
    elements_[i].innerHTML=_array[elements.length+i];
  }
  await speed_anime(500);
  _result_display.hidden=true;
  _index.hidden=true;
  let low=0,high=_array.length-1,mid;
  while(low<=high){
    await speed_anime(delay);
    mid=Math.floor((low+high)/2);
    // _index_text.innerHTML=`${mid}`;
    await speed_anime(Math.floor(delay/2));
    l.innerHTML=`${low}`;
    m.innerHTML=`${mid}`;
    h.innerHTML=`${high}`;
    if(low<elements.length){
      elements[low].style.background='#fea82f';
    }
    else{
      elements_[low-elements.length].style.background='#fea82f';
    }
    if(high<elements.length){
      elements[high].style.background='#ff5200';
    }
    else{
      elements_[high-elements.length].style.background='#ff5200';
    }
    if(mid<elements.length){
      elements[mid].style.background='purple';
    }
    else{
      elements_[mid-elements.length].style.background='purple';
    }
    if(parseInt(_searching_text.innerHTML)==_array[mid]){
      await speed_anime(Math.floor(delay/2));
      index_values.hidden=true;
      _index.hidden=false;
      _index_text.innerHTML=`${mid}`;
      if(low<elements.length){
        elements[low].style.background='#fff';
      }
      else{
        elements_[low-elements.length].style.background='#fff';
      }
      if(high<elements.length){
        elements[high].style.background='#fff';
      }
      else{
        elements_[high-elements.length].style.background='#fff';
      }
      if(mid<elements.length){
        elements[mid].style.background='yellow';
      }
      else{
        elements_[mid-elements.length].style.background='yellow';
      }
      _flag=1;
      break;
    }
    else if(parseInt(_searching_text.innerHTML)>_array[mid]){
      await speed_anime(delay);
      if(low<elements.length){
        elements[low].style.background='#fff';
      }
      else{
        elements_[low-elements.length].style.background='#fff';
      }
      if(high<elements.length){
        elements[high].style.background='#fff';
      }
      else{
        elements_[high-elements.length].style.background='#fff';
      }
      low=mid+1;
    }
    else{
      await speed_anime(delay);
      if(low<elements.length){
        elements[low].style.background='#fff';
      }
      else{
        elements_[low-elements.length].style.background='#fff';
      }
      if(high<elements.length){
        elements[high].style.background='#fff';
      }
      else{
        elements_[high-elements.length].style.background='#fff';
      }
      high=mid-1;
    }
    if(mid<elements.length){
      elements[mid].style.background='#fff';
    }
    else{
      elements_[mid-elements.length].style.background='#fff';
    }
    await speed_anime(delay);
  }
  if(_flag==0){
    await speed_anime(delay);
    index_values.hidden=true;
    _index.hidden=false;
    _index_text.innerHTML=`${mid}`;
    _result_display.hidden=false;
    _result_text.hidden=false;
    _result_text.innerHTML="Element Not Found";
  }
  else{
    await speed_anime(delay);
    _result_text.hidden=false;
    _result_display.hidden=false;
    _result_text.innerHTML="Element Found";
  }
}

let l = document.querySelector('.low');
let m = document.querySelector('.mid');
let h = document.querySelector('.high');
let index_values = document.querySelector('.index_values');
let _searching_display = document.querySelector('.searching_display');
let extra=document.querySelector('.extra_padding');
let _searching_text = document.querySelector(".searching_text");
let _index_text=document.querySelector(".index_text");
let _num=document.querySelector(".num");
let _index = document.querySelector(".index");
let _result_display = document.querySelector(".result_display");
let _result_text = document.querySelector(".result_text");
let _search_display = document.querySelector(".search_display");
let binary_ = document.querySelector(".binary");
binary.addEventListener('click', async function(){
  if(isNaN(_searching_text.innerHTML) || _num.value==''){
    _searching_display.hidden=true;
    _search_display.hidden=false;
    _result_display.hidden=true;
    _searching_text.hidden=false;
    _searching_text.innerHTML="Enter a number";
    _num.value='';
  }
  else{
    let _ele=document.querySelectorAll(".bar");
    let _ele_=document.querySelectorAll(".bar_");
    for(let i=0;i<_ele.length;i++){
      _ele[i].style.background='#fff';
    }
    for(let i=0;i<_ele_.length;i++){
      _ele_[i].style.background='#fff';
    }
    _result_text.hidden=true;
    _index.hidden=true;
    index_values.hidden=false;
    _search_display.hidden=false;
    _searching_text.hidden=false;
    _result_display.hidden=true;
    _searching_text.innerHTML=_num.value;
    extra.classList.remove('extra_padding');
    disableButtons();
    disableNewArray();
    disableInput();
    disableBar();
    await binary_search();
    enableButtons();
    enableNewArray();
    enableInput();
    enableBar();
  }
})

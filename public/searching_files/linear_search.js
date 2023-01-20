async function linear_search(){
  let elements=document.querySelectorAll(".bar");
  let elements_=document.querySelectorAll(".bar_");
  let index_;
  let flag_=0;
  for(let i=0;i<elements.length;i++){
    index_text.innerHTML=`${i}`;
    elements[i].style.background='purple';
    if(parseInt(elements[i].innerHTML)==searching_text_.innerHTML){
      elements[i].style.background='yellow';
      flag_=1;
      index_=i;
      break;
    }
    await speed_anime(delay);
    elements[i].style.background='#fff';
  }
  for(let i=0;i<elements_.length;i++){
    if(flag_==0){
      index_text.innerHTML=`${elements.length+i}`;
      elements_[i].style.background='purple';
      if(parseInt(elements_[i].innerHTML)==searching_text_.innerHTML){
        elements_[i].style.background='yellow';
        flag_=1;
        index_=elements.length+i;
        break;
      }
      await speed_anime(delay);
      elements_[i].style.background='#fff';
    }
    else{
      break;
    }
  }
  if(flag_==0){
    await speed_anime(delay);
    result_display_.hidden=false;
    result_text_.innerHTML='Element Not Found';
  }
  else{
    await speed_anime(delay);
    result_display_.hidden=false;
    result_text_.innerHTML='Element found';
  }
}

let search_display_=document.querySelector('.search_display');
let num_=document.querySelector('.num');
let index_=document.querySelector('.index');
let index_text_=document.querySelector('.index_text');
let result_text_=document.querySelector('.result_text');
let result_display_=document.querySelector('.result_display');
let searching_text_=document.querySelector('.searching_text');
let searching_display_=document.querySelector('.searching_display');
let linear_=document.querySelector('.linear');
let full_extra=document.querySelector('.extra_padding');
linear_.addEventListener('click', async function(){
  searching_text_.innerHTML=num_.value;
  if(num_.value=='' || isNaN(searching_text_.innerHTML)){
    searching_display_.hidden=true;
    search_display_.hidden=false;
    result_display_.hidden=true;
    searching_text_.hidden=false;
    searching_text_.innerHTML="Enter a number";
    num_.value='';
  }
  else{
    searching_display_.hidden=false;
    result_text_.innerHTML='';
    result_display_.hidden=true;
    let ele=document.querySelectorAll(".bar");
    let ele_=document.querySelectorAll(".bar_");
    for(let i=0;i<ele.length;i++){
      ele[i].style.background='#fff';
    }
    for(let i=0;i<ele_.length;i++){
      ele_[i].style.background='#fff';
    }
    full_extra.classList.remove('extra_padding');
    search_display_.hidden=false;
    searching_text_.hidden=false;
    index_.hidden=false;
    disableButtons();
    disableNewArray();
    disableInput();
    disableBar();
    await linear_search();
    enableButtons();
    enableNewArray();
    enableInput();
    enableBar();
  }
})

async function linear_search(){
  let elements=document.querySelectorAll(".bar");
  let index_;
  let flag=0;
  console.log(searching_text.innerHTML);
  for(let i=0;i<elements.length;i++){
    console.log(parseInt(elements[i].style.height));
    index_text.innerHTML=`${i}`;
    elements[i].style.background='purple';
    if(parseInt(elements[i].style.height)/2==parseInt(searching_text.innerHTML)){
      console.log(elements[i].style.height);
      console.log(searching_text.innerHTML);
      elements[i].style.background='yellow';
      flag=1;
      index_=i;
      break;
    }
    await speed_anime(delay);
    elements[i].style.background='#0D6EFD';
  }
  if(flag==0){
    await speed_anime(delay);
    result_display.hidden=false;
    result_text.innerHTML='Element Not Found';
  }
  else{
    await speed_anime(delay);
    result_display.hidden=false;
    result_text.innerHTML='Element found';
  }
}

let search_display=document.querySelector('.search_display');
let index=document.querySelector('.index');
let index_text=document.querySelector('.index_text');
let result_text=document.querySelector('.result_text');
let result_display=document.querySelector('.result_display');
let searching_text=document.querySelector('.searching_text');
let searching_display=document.querySelector('.searching_display');
let linearSearch = document.querySelector(".linearSearch");
linearSearch.addEventListener("click", async function(){
  searching_text.innerHTML=num.value;
  if(num.value=='' || isNaN(searching_text.innerHTML)){
    searching_display.hidden=true;
    search_display.hidden=false;
    result_display.hidden=true;
    searching_text.hidden=false;
    searching_text.innerHTML="Enter a number";
    num.value='';
  }
  else{
    searching_display.hidden=false;
    result_text.innerHTML='';
    result_display.hidden=true;
    search_display.hidden=false;
    searching_text.hidden=false;
    index.hidden=false;
    let ele = document.querySelectorAll(".bar");
    for(let i=0;i<ele.length;i++){
      ele[i].style.background="#0D6EFD";
    }
    disableSearching();
    disableInput();
    disableSizeBar();
    disableNewArray();
    await linear_search();
    enableSearching();
    enableInput();
    enableSizeBar();
    enableNewArray();
  }
})

async function bubble_sort(){
  let elements = document.querySelectorAll(".bar");
  for(let i=0;i<elements.length-1;i++){
    for(let j=0;j<elements.length-i-1;j++){
      elements[j].style.background='purple';
      elements[j+1].style.background='purple';
      await speed_anime(delay);
      if(parseInt(elements[j].innerHTML) > parseInt(elements[j+1].innerHTML)){
        swap(elements[j],elements[j+1]);
      }
      elements[j].style.background='#fff';
      elements[j+1].style.background='#fff';
    }
    elements[elements.length-i-1].style.background='yellow';
  }
  elements[0].style.background='yellow';
}

let bubbleSort=document.querySelector(".bubbleSort");
bubbleSort.addEventListener('click', async function(){
  disableSorting();
  disableNewArray();
  disableSizeBar();
  await bubble_sort();
  enableSorting();
  enableNewArray();
  enableSizeBar();
})

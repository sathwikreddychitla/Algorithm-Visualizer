async function selection_sort(){
  let elements=document.querySelectorAll(".bar");
  let min;
  for(let i=0;i<elements.length-1;i++){
    min=i;
    elements[i].style.background='purple';
    for(let j=i+1;j<elements.length;j++){
      elements[j].style.background='#ff5200';
      await speed_anime(delay);
      if(parseInt(elements[j].innerHTML)<parseInt(elements[min].innerHTML)){
        if(min!==i){
          elements[min].style.background='#fff';
        }
        min=j;
        elements[min].style.background='purple';
      }
      else{
        elements[j].style.background='#fff';
      }
    }
    await speed_anime(delay);
    swap(elements[i],elements[min]);
    elements[min].style.background='#fff';
    elements[i].style.background='yellow';
  }
  elements[elements.length-1].style.background='yellow';
}

let selectionSort = document.querySelector('.selectionSort');
selectionSort.addEventListener('click', async function(){
  disableSorting();
  disableNewArray();
  disableSizeBar();
  await selection_sort();
  enableSorting();
  enableNewArray();
  enableSizeBar();
})

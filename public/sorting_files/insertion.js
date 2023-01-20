async function insertion_sort(){
  let elements=document.querySelectorAll(".bar");
  let key,j;
  for(let i=0;i<elements.length;i++){
    key=elements[i].style.height;
    j=i-1;
    elements[i].style.background='purple';
    await speed_anime(delay);
    while(j>=0 && parseInt(elements[j].style.height)>parseInt(key)){
      elements[j].style.background='purple';
      elements[j+1].style.height=elements[j].style.height;
      j--;
      await speed_anime(delay);
      for(let k=i;k>=0;k--){
        elements[k].style.background='yellow';
      }
    }
    elements[j+1].style.height=key;
  }
}

let insertionSort = document.querySelector(".insertionSort");
insertionSort.addEventListener('click', async function(){
  disableSorting();
  disableSizeBar();
  disableNewArray();
  await insertion_sort();
  enableSorting();
  enableSizeBar();
  enableNewArray();
})

async function insertion_sort(){
  let elements=document.querySelectorAll(".bar");
  let key,j;
  for(let i=0;i<elements.length;i++){
    key=elements[i].innerHTML;
    j=i-1;
    elements[i].style.background='purple';
    await speed_anime(delay);
    while(j>=0 && parseInt(elements[j].innerHTML)>parseInt(key)){
      elements[j].style.background='purple';
      elements[j+1].innerHTML=elements[j].innerHTML;
      j--;
      await speed_anime(delay);
      for(let k=i;k>=0;k--){
        elements[k].style.background='yellow';
      }
    }
    elements[j+1].innerHTML=key;
  }
}


let insertionSort = document.querySelector(".insertionSort");
insertionSort.addEventListener('click', async function(){
  disableSorting();
  disableNewArray();
  disableSizeBar();
  await insertion_sort();
  enableSorting();
  enableNewArray();
  enableSizeBar();
})

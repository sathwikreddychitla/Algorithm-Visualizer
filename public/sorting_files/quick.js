async function quick(){
  let elements=document.querySelectorAll(".bar");
  await quick_sort(elements,0,elements.length-1);
}

async function quick_sort(elements,low,high){
  if(low<high){
    await speed_anime(delay);
    let part = await partition(elements,low,high);
    quick_sort(elements,low,part-1);
    quick_sort(elements,part+1,high);
  }
  elements[high].style.background='yellow';
  elements[low].style.background='yellow';
}

async function partition(elements,low,high){
  let pivot=elements[high].style.height;
  elements[high].style.background='purple';
  let i=low-1;
  for(let j=low;j<=high;j++){
    await speed_anime(delay);
    if(parseInt(elements[j].style.height)<parseInt(pivot)){
      i++;
      elements[i].style.background='#fea82f';
      elements[j].style.background='#ff5200';
      await speed_anime(delay);
      swap(elements[i],elements[j]);
      elements[i].style.background='#fea82f';
      elements[j].style.background='#ff5200';
      await speed_anime(delay);
      elements[i].style.background='#0D6EFD';
      elements[j].style.background='#0D6EFD';
    }
  }
  await speed_anime(delay);
  swap(elements[i+1],elements[high]);
  // elements[high].style.background='yellow';
  elements[i+1].style.background='yellow';
  return (i+1);
}

let quickSort=document.querySelector(".quickSort");
quickSort.addEventListener('click', async function(){
  disableSorting();
  disableSizeBar();
  disableNewArray();
  await quick();
  enableSorting();
  enableSizeBar();
  enableNewArray();
})

async function merge(){
  let elements=document.querySelectorAll(".bar");
  await merge_sort(elements,0,elements.length-1);
}

async function merge_sort(elements,low,high){
  if(low>=high){
    return;
  }
  let mid = low + Math.floor((high-low)/2);
  await merge_sort(elements,low,mid);
  await merge_sort(elements,mid+1,high);
  await mergesort(elements,low,mid,high);
}

async function mergesort(elements,low,mid,high){
  let n1=mid-low+1;
  let n2=high-mid;
  let l=new Array(n1);
  let r=new Array(n2);
  for(let i=0;i<n1;i++){
    await speed_anime(delay);
    elements[low+i].style.background='#fea82f';
    l[i]=elements[low+i].style.height;
  }
  for(let j=0;j<n2;j++){
    await speed_anime(delay);
    elements[mid+j+1].style.background='#ff5200';
    r[j]=elements[mid+j+1].style.height;
  }
  let i=0,j=0,k=low;
  while(i<n1&&j<n2){
    await speed_anime(delay);
    if(parseInt(l[i])<=parseInt(r[j])){
      if((n1+n2)==elements.length){
        elements[k].style.background='yellow';
      }
      else{
        elements[k].style.background='purple';
      }
      elements[k].style.height=l[i];
      i++;
    }
    else{
      if((n1+n2)==elements.length){
        elements[k].style.background='yellow';
      }
      else{
        elements[k].style.background='purple';
      }
      elements[k].style.height=r[j];
      j++;
    }
    k++;
  }
  while(i<n1){
    await speed_anime(delay);
    if((n1+n2)==elements.length){
      elements[k].style.background='yellow';
    }
    else{
      elements[k].style.background='purple';
    }
    elements[k].style.height=l[i];
    i++;
    k++;
  }
  while(j<n2){
    await speed_anime(delay);
    if((n1+n2)==elements.length){
      elements[k].style.background='yellow';
    }
    else{
      elements[k].style.background='purple';
    }
    elements[k].style.height=r[j];
    j++;
    k++;
  }
}

let mergeSort=document.querySelector(".mergeSort");
mergeSort.addEventListener('click', async function(){
  disableSorting();
  disableSizeBar();
  disableNewArray();
  await merge();
  enableSorting();
  enableSizeBar();
  enableNewArray();
})

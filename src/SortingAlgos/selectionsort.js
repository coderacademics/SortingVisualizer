export function SelectionSort(array){
    const animations=[];
    let min=0;
    for(let i=0;i<array.length;i++)
    {
        min=i;
        animations.push([i,i,"colchng"]);
        for(let j=i+1;j<array.length;j++){
            animations.push([j,j,"colchng"]);
            animations.push([j,j,"colrev"]);
            if(array[j]<array[min])
            {
               min=j;
            }
        }
        animations.push([i,min,"swap"]);
        animations.push([i,min,"colrevall"]);
        let temp=array[i];
        array[i]=array[min];
        array[min]=temp;
    }
    // console.log(array);
    return animations;
}
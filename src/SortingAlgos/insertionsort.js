export function InsertionSort(array) {
    const animations=[];
    // console.log(array);
    for(let i=0;i<array.length;i++)
    {
        let key=array[i];
        let j= i-1;
        animations.push([i,i,"key"]);
        while(j>=0&& array[j]>key)
        {
            array[j+1]=array[j];
            animations.push([j,j+1,"colorchange"]);
            animations.push([j,j+1,"swap"]);
            animations.push([j,j+1,"colorrev"]);
            j--;
        }
        animations.push([j+1,j+1,"keyrev"]);
        array[j+1]=key;
    }
    // console.log(array);
    // console.log(animations);
    // return array;
    return animations;
}




export function BubbleSort(array) {
    // console.log(array);
    const animations=[];
    let i=0,j=0;
    for(i=0;i<array.length;i++)
    {
        for(j=0;j<array.length-1-i;j++)
        {
            animations.push([j,j+1]);
            if(array[j]>array[j+1])
            {
                animations.push([j,j+1]);
                let temp=array[j+1];
                array[j+1]=array[j];
                array[j]=temp;
            }
            else{
                animations.push([j,j]);
            }
            animations.push([j,j+1]);
        }
    }

    return animations;
    // return array;
}

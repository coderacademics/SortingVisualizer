function swap(array, animations, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    animations.push([i,j,"colorchange1"]);
    animations.push([i,j,"valuerev"]);
    animations.push([i,j,"colorreverse"]);

}
function partition(array, animations, start, end) {
    let i = start - 1;
    let pivot = array[end];
    animations.push([end, end,"pivot"]);
    for (let j = start; j < end; j++) {
        if (array[j] < pivot) {
            i++;
            swap(array, animations, i, j);
        }
    }
    swap(array, animations, i + 1, end);
    animations.push([end, end,"pivotrev"]);
    return i + 1;
}
function quicksortHelper(array, animations, start, end) {
    if (start < end) {
        let pivot = partition(array, animations, start, end)
        // console.log(array);
        quicksortHelper(array, animations, start, pivot - 1);
        quicksortHelper(array, animations, pivot + 1, end);
    }
}
export function QuickSort(array) {
    // console.log(array);
    const animations = [];
    quicksortHelper(array, animations, 0, array.length - 1);
    console.log(array);
    return animations;
}

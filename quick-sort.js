const array = [2,3,2,5,6,8,1,9,4,2,9,6,4,-1,7,-1,-5,23,6,2,35,6,3,32];

const quickSort = (arr) => {
    if(arr.length < 1) {
        return arr
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr[pivotIndex];
    let less = [];
    let bigger = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === pivotIndex) continue
        if (arr[i] < pivot) {
            less.push(arr[i])
        } else {
            bigger.push(arr[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(bigger)];
}

console.log(quickSort(array));
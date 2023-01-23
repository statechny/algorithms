const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const binarySearch = (arr, item) => {
    let start = 0;
    let end = arr.length;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if(arr[middle] === item) {
            return middle;
        }
        if(arr[middle] > item) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return -1;
}

console.log(binarySearch(array, 5));
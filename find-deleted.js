const array = [...Array(1000004).keys()];

const arrayWithDeletedItem = array.filter((number) => number !== 77);

let count = 0;

const recursiveBinarySearch = (arr, start, end) => {
    let mid = Math.floor((start + end) / 2);
    const isShift = arr[mid] !== mid
    count++;
    if ( end - start < 2) {
        return Math.min(arr.length, (isShift ? arr[mid] - 1 : arr[mid] + 1))
    }
    if(isShift) {
        return recursiveBinarySearch(arr, start, mid - 1);
    }  else {
        return recursiveBinarySearch(arr, mid + 1, end);
    }
}

console.log({recursiveBinarySearch: recursiveBinarySearch(arrayWithDeletedItem, 0, arrayWithDeletedItem.length)});
console.log({count});

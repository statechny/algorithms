const array = [...Array(1000004).keys()];

const arrayWithDeletedItem = array.filter((number) => number !== 77);

const recursiveBinaryFindDeleted = (arr, start, end) => {
    let mid = Math.floor((start + end) / 2);
    const isShift = arr[mid] !== mid
    if ( end - start < 2) {
        return Math.min(arr.length, (isShift ? arr[mid] - 1 : arr[mid] + 1))
    }
    if(isShift) {
        return recursiveBinaryFindDeleted(arr, start, mid - 1);
    }  else {
        return recursiveBinaryFindDeleted(arr, mid + 1, end);
    }
}

console.log({recursiveBinarySearch: recursiveBinaryFindDeleted(arrayWithDeletedItem, 0, arrayWithDeletedItem.length)});

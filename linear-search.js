const array = [1,4,5,8,5,2,3,7,3,11,];

const linearSearch = (arr, item) => {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === item) {
            return i
        }
    }
    return null
}

console.log(linearSearch(array, 8));

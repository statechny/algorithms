const array = [...Array(100000).keys()];

const arrayWithDeletedItem = array.filter((number) => number !== 77);

const binaryInsert = (val, arr) => {
    let mid,
        len=arr.length,
        start=0,
        end=len-1;
    while(start <= end){
        mid = Math.floor((end + start)/2);
        if(val <= arr[mid]){
            if(val >= arr[mid-1]){
                arr.splice(mid,0,val);
                break;
            }
            end = mid-1;
        }else{
            if(val <= arr[mid+1]){
                arr.splice(mid+1,0,val);
                break;
            }
            start = mid+1;
        }
    }
    return arr;
}
console.log(binaryInsert(77, arrayWithDeletedItem));;
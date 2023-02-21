const getFloorLength = (width, floorsQty) => {
    let floorLength = width
    for(let i = 1; i < floorsQty; i++) {
        floorLength+= width * 2
    }
    return floorLength;
}

const towerBuilder = (nFloors, nBlockSz) => {
    const [width, height] = nBlockSz;
    const floorsQty  = nFloors * height;
    const floorLength  = getFloorLength(width, nFloors)
    let counter = height;
    let step = 0;
    const tower = new Array(floorsQty)
        .fill('*'.repeat(floorLength))
        .map((floor, index) => {
            const spaces = height > 1 ?
                Math.floor((floorLength - width) / 2 - width * step) :
                Math.floor((floorLength - width) / 2 - width * index);
            const regex = new RegExp(`^[*]{${spaces}}|[*]{${spaces}}$`, 'mg')
            counter-=1;
            if(counter === 0) {
                step+=1
                counter = height;
            }
            return floor.replace(regex, ' '.repeat(spaces));
        })

    return tower;
}

console.table(towerBuilder(1, [1,1]));
console.table(towerBuilder(3, [4,2]));
console.table(towerBuilder(3, [2,3]));
console.table(towerBuilder(6, [2,1]));
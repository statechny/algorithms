const towerBuilder = (nFloors) => {
    const floorLength  = nFloors * 2 - 1;
    const tower = new Array(nFloors)
        .fill('*'.repeat(floorLength))
        .map((floor, index) => {
            const spaces = nFloors - 1 - index;
            const regex = new RegExp(`^[*]{${spaces}}|[*]{${spaces}}$`, 'mg')
            return floor.replace(regex, ' '.repeat(spaces));
        })
    return tower;
}


console.table(towerBuilder(12));
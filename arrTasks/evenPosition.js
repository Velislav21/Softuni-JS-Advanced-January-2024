function evenPosition(arr) {

    let evenPositions = arr.filter((num, i) => {
        if (i % 2 == 0) {
            return 1
        }
    })
    console.log(evenPositions.join(' '))
}
evenPosition(['20', '30', '40',

    '50', '60'])

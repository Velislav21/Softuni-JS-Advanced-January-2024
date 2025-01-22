function areaVol(areaa, vol, input) {

    const shapes = JSON.parse(input)            // parse given input

    const result = shapes.map( shape => {     // shapes.forEach((shape) => {

        return {
            area: areaa.call(shape),       //     const area = areaa.call(shape)         
            volume: vol.call(shape)          //const volume = vol.call(shape)
        }

    })

    return result
}
function area() {

    return Math.abs(this.x * this.y);

};

function vol() {

    return Math.abs(this.x * this.y * this.z);

};

const shapes1 = `[

    {"x":"1","y":"2","z":"10"},
    
    {"x":"7","y":"7","z":"10"},
    
    {"x":"5","y":"2","z":"10"}
    
    ]`

areaVol(area, vol, shapes1)

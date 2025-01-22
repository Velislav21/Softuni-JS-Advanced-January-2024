function circle(input){
    
    let inputType = typeof input;
    let area
    if (inputType === 'number'){
        let radius = input;
        area = Math.PI * radius * radius
        
        console.log(area.toFixed(2))
    }else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`)
    }
}
circle("n")
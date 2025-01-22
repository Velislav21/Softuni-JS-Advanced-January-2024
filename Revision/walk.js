function walk(steps, stepLenght, kmPerHour){

    let distanceInMeters = steps * stepLenght
    
    let metersPerHour = 1000 * kmPerHour; 

    let breaks = Math.floor(distanceInMeters / 500)

    let metersToUni = (metersPerHour / distanceInMeters) * 1000
    console.log(metersToUni / metersPerHour)
}
walk(4000, 0.60, 5)
function radar(speed, area){

    switch (area){

        case "motorway": { 

            let speedLimit = 130
            if (speed <= speedLimit){
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
            }else {
                if (speed > speedLimit){
                    
                    let difference = speed - speedLimit
                    
                    if (difference <= 20){
                        
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - speeding`)
                    }else if (difference <= 40){
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`)
                    }else if (difference > 40){
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - reckless driving`)
                    }
                }
            }
            break;
        }
        case "interstate": {

            let speedLimit = 90
            if (speed <= speedLimit){
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
            }else {
                if (speed > speedLimit){
                    
                    let difference = speed - speedLimit
                    
                    if (difference <= 20){
                        
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - speeding`)
                    }else if (difference <= 40){
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`)
                    }else if (difference > 40){
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - reckless driving`)
                    }
                }
            }
            break;
        }
        case "city": {
            let speedLimit = 50
            if (speed <= speedLimit){
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
            }else {
                if (speed > speedLimit){
                    
                    let difference = speed - speedLimit
                    
                    if (difference <= 20){
                        
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - speeding`)
                    }else if (difference <= 40){
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`)
                    }else if (difference > 40){
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - reckless driving`)
                    }
                }
            }
            break;
        }
        case "residential":{
            let speedLimit = 20
            if (speed <= speedLimit){
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`)
            }else {
                if (speed > speedLimit){
                    
                    let difference = speed - speedLimit
                    
                    if (difference <= 20){
                        
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - speeding`)
                    }else if (difference <= 40){
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`)
                    }else if (difference > 40){
                        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - reckless driving`)
                    }
                }
            }
            break;
        }
    }
}
radar(40, 'city')
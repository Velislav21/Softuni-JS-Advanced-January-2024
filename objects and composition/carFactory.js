function factory(carRequirements) {

    let finalCar = {};

    finalCar.model = carRequirements.model;

    if (carRequirements.power <= 90) {
        finalCar.engine = {
            power: 90,
            volume: 1800
        }
    } else if (carRequirements.power <= 120) {
        finalCar.engine = {
            power: 120,
            volume: 2400
        }
    } else {
        finalCar.engine = {
            power: 200,
            volume: 3500
        }
    }

    let carriage = {
        type: carRequirements.carriage,
        color: carRequirements.color,
    }
    finalCar.carriage = carriage

    let carRequirementsSize = carRequirements.wheelsize


    if (carRequirementsSize % 2 == 0){
        carRequirementsSize = Math.floor(carRequirementsSize - 1);
    }
    // }else {
    //     carRequirementsSize = Math.floor(carRequirementsSize)
    // }
    let wheels = [0, 0, 0, 0]
    wheels.fill(carRequirementsSize, 0, 4)
    finalCar.wheels = wheels
    
    return finalCar
}
factory({ model: 'Brichka',
power: 65,
color: 'white',
carriage: 'hatchback',
wheelsize: 16 })
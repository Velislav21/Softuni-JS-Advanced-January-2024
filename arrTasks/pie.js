function pie(arr, startPie, endPie){

    let startIndex = arr.indexOf(startPie);
    let endIndex = arr.indexOf(endPie);
    
    let resultArr = []
    for (let i = startIndex; i <= endIndex; i++){

        resultArr.push(arr[i])
    }
    return resultArr
}
pie(['Apple Crisp', 'Mississippi Mud Pie', 'Pot Pie', 'Steak and Cheese Pie', 'Butter Chicken Pie', 'Smoked Fish Pie'], 'Pot Pie', 'Smoked Fish Pie')
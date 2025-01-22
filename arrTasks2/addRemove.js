function addRemove(arr){

    let resultArr = [];
    let value = 1;
    for (let command of arr){

        if (command == "add"){
            resultArr.push(value)
        }else {
            resultArr.pop()
        }
        value++
    }    
    if (resultArr.length == 0){
        console.log(`Empty`)
    }else {
        resultArr.forEach(num => console.log(num))
    }
}
addRemove(['remove', 'remove', 'remove'])
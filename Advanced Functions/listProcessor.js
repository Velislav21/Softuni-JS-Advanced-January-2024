function processor(input) {

    const result = [];
    input.forEach((pair) => {

        let [command, value] = pair.split(' ')
        if (command == 'add'){
            result.push(value)
        }else if (command == 'remove'){
            while (result.includes(value)){
                const index = result.indexOf(value);
                result.splice(index, 1)
            }
        } else {
            console.log(result.join(','))
        }
    })
}
processor(['add pesho', 'add george', 'add peter', 'remove peter','print'])

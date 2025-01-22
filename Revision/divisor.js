function divisor(num1, num2){

    if (num2 == 0){
        return num1
    }
    console.log(divisor(num2, num1 % num2))

}
divisor(2154,
    458)
function previousDay (year, month, day){

    let date = new Date(year, month, day).getDate()
    console.log(`${year}-${month}-${date - 1}`)
}
previousDay(2015, 5, -1)
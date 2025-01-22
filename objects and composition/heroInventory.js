function inventory(arr){

    let jsonArr = [];

    for (let hero of arr){
        let [name, level, items] = hero.split(' / ');
        level = Number(level);
        
        items = items ? items.split(', ') : [];
        
        jsonArr.push({name, level, items})
    }
    // return jsonArr
    console.log(JSON.stringify(jsonArr))
}
inventory(['Jake / 1000 / Gauss, HolidayGrenade'])

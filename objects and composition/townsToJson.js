function townCoordinates(arr) {
    let result = [];

    for (let i = 1; i < arr.length; i++) {

        const tokens = arr[i].split(/\s*\|\s*/g)
        const town = tokens[1];
        const lat = Number(tokens[2]).toFixed(2);
        const lng = Number(tokens[3]).toFixed(2)

        let city = {
            Town: town,
            Latitude: Number(lat),
            Longitude: Number(lng)
        }
        result.push(city)
    }
    console.log(JSON.stringify(result))
}
townCoordinates(['| Town | Latitude | Longitude |',

    '| Sofia | 42.696552 | 23.32601 |',

    '| Beijing | 39.913818 | 116.363625 |'])
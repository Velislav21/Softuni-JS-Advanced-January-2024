function argumentInfo() {

    const obj = {}
    Array.from(arguments)
        .forEach((argument) => {
            const type = typeof argument
            console.log(`${typeof argument}: ${argument}`)
            if (!obj[type]) {
                obj[type] = 0;
            }

            obj[type]++
        })
    Object.entries(obj) // this way, i do not have refference, if need one, assign it to a variable.
        .sort((a, b) => b[1] - a[1])
        .forEach(([key, value]) => console.log(`${key} = ${value}`)); 
    // for (const [key, value] of sortedEntries) {
    //     console.log(`${key} = ${value}`)
    // }
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); })
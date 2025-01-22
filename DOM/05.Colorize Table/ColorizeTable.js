function colorize() {

//     const rows = document.querySelectorAll('tr:nth-of-type(2n)');
//     const arr = Array.from(rows)
//     arr.forEach(x => x.style.backgroundColor = 'Teal');

    const rows = document.querySelectorAll('tbody tr');
    const arr = Array.from(rows);

    arr.forEach((x, i) => {
        if (i % 2 != 0){
            x.style.backgroundColor = 'Teal';
        }
    })
}
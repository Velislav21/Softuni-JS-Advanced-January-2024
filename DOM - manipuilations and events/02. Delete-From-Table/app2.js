function deleteByEmail() {
    const query = document.querySelector('input[name = "email"]').value
    
    const rows = document.querySelectorAll('#customers tbody tr')

    const rowsArr = Array.from(rows)

    let isDeleted = false;

    for (let row of rowsArr){
        const col = row.children[1]
        
        if (col.textContent == query){

            row.remove()
            isDeleted = true
        }
    }
    const res = document.getElementById('result')
    res.textContent = isDeleted ? 'Deleted.' : 'Not found.'
}
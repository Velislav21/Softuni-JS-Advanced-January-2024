function filterEmployees(data, criteria) {
    let employees = JSON.parse(data);
    const [prop, value] = criteria.split('-')

    employees
        .filter(employee => employee[prop] == value)
        .map((x, i) => `${i}. ${x.first_name} ${x.last_name} - ${x.email}`)
        .forEach(employee => console.log(employee))
}
filterEmployees(`[{

    "id": "1",
    
    "first_name": "Kaylee",
    
    "last_name": "Johnson",
    
    "email": "k0@cnn.com",
    
    "gender": "Female"
    
    }, {"id": "2", "first_name": "Kizzee", "last_name": "Johnson", "email": "kjost1@forbes.com", "gender": "Female" }, { "id": "3", "first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" }, { "id": "4", "first_name": "Evanne", "last_name": "Johnson", "email": "ev2@hostgator.com", "gender": "Male" }]`, 'all')
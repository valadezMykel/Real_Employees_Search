module.exports = (employeeArr, searchInput, activeSearchType) => {

    console.log(employeeArr[0])
    switch(activeSearchType) {

        case 'fname':
            return employeeArr.filter(employee => employee.name.first.includes(searchInput));
        case 'lname':
            return employeeArr.filter(employee => employee.name.last.includes(searchInput));
        case 'postal':
            return employeeArr.filter(employee => employee.location.postcode.toString().includes(searchInput));
        case 'phone':
            return employeeArr.filter(employee => employee.phone.includes(searchInput));
        case 'email':
            return employeeArr.filter(employee => employee.email.includes(searchInput));
        case 'gender':
            return employeeArr.filter(employee => employee.gender === searchInput);
        default: 
            return employeeArr;
    }
}
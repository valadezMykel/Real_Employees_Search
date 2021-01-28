module.exports = (employeeArr, searchInput) => {
    return employeeArr.filter(employee => (employee.name.first.includes(searchInput) || employee.name.last.includes(searchInput)))
}
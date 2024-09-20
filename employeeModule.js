

const employees = require('./Employee');


function getAllEmployees() {
    return employees;
}


function getEmployeeNames() {
    return employees
        .map(emp => `${emp.firstName} ${emp.lastName}`)
        .sort();
}


function getTotalSalary() {
    return employees.reduce((total, emp) => total + emp.Salary, 0);
}

module.exports = {
    getAllEmployees,
    getEmployeeNames,
    getTotalSalary
};

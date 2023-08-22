// Write your solution in this file!

let employee = {name : 'Katia' , streetAdress : 'Algiers'} ;

function updateEmployeeWithKeyAndValue(employee , key , value) {
    return { ...employee , [key] : value};

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee , key , value) {
    employee[key] = value;
    return employee

}

function deleteFromEmployeeByKey(employee , key ) {
    let employee1 = {...employee};
    delete employee1[key];
    return employee1
}

const updatedEmployee = deleteFromEmployeeByKey(employee, 'streetAddress');
console.log(updatedEmployee );

function destructivelyDeleteFromEmployeeByKey(employee , key) {
    delete employee[key] ;
    return employee
}
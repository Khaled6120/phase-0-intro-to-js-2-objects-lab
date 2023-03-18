
const employee = {
    name: "KHALED",
    streetAddress: "Karabuk, Turkey"
}

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    return { ...employee, [key]: value }
  
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee;
}

const deleteFromEmployeeByKey = (employee, key) => {
    let Copy = { ...employee };
    delete Copy[key];
    return Copy
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee
}
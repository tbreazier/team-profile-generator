const Employee = require('../lib/Employee.js');

//Test New Employee Object
test('New Employee Object Created', () => {
    const employee = new Employee('Karl', 3255, 'karl@gmail.com')

    expect(employee).toEqual(expect.any(Object)); 
});

//Test for Employee name
test('Employee Name', () => {
    const employee = new Employee('Karl', 3255, 'karl@gmail.com')

    expect(employee.name).toEqual(expect.any(String)); 
});

//Test for Employee ID
test('Employee ID', () => {
    const employee = new Employee('Karl', 3255, 'karl@gmail.com')

    expect(employee.id).toEqual(expect.any(Number)); 
});

//Test for Employee Email
test('Employee Email', () => {
    const employee = new Employee('Karl', 3255, 'karl@gmail.com')

    expect(employee.email).toEqual(expect.any(String)); 
});

//Test for Employee Role
test('Employee Role', () => {
    const employee = new Employee('Karl', 3255, 'karl@gmail.com')

    expect(employee.getRole()).toBe('Employee'); 
});

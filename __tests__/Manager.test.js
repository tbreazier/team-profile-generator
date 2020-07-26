const Manager = require('../lib/Manager.js');

//Test New Manager Object
test('New Employee Object Created', () => {
    const manager = new Manager('Steve', 2222, 'steve@gmail.com', 503)

    expect(manager).toEqual(expect.any(Object)); 
});

//Test Manager Office Number
test('New Manager Office Number', () => {
    const manager = new Manager('Steve', 2222, 'steve@gmail.com', 503)

    expect(manager.officeNumber).toEqual(expect.any(Number)); 
});

//Test Manager Role
test('New Manager Role', () => {
    const manager = new Manager('Steve', 2222, 'steve@gmail.com', 503)

    expect(manager.getRole()).toBe('Manager'); 
});
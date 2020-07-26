const Intern = require('../lib/Intern.js');

//Test New Intern Object
test('New Intern Object Created', () => {
    const intern = new Intern('Diana', 90001, 'diana@gmail.com', 'University of Texas')

    expect(intern).toEqual(expect.any(Object)); 
});

//Test Intern School
test('Intern School Test', () => {
    const intern = new Intern('Diana', 90001, 'diana@gmail.com', 'University of Texas')

    expect(intern.school).toEqual(expect.any(String)); 
});

//Test Intern Role
test('New Intern Role', () => {
    const intern = new Intern('Diana', 90001, 'diana@gmail.com', 'University of Texas')

    expect(intern.getRole()).toBe('Intern'); 
});
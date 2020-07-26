const Engineer = require('../lib/Engineer.js');

//Test New Engineer Object
test('New Engineer Object Created', () => {
    const engineer = new Engineer('Robin', 6562, 'robine@gmail.com', 'heyitsrobin')

    expect(engineer).toEqual(expect.any(Object)); 
});

//Test Engineer Github
test('Engineer Github', () => {
    const engineer = new Engineer('Robin', 6562, 'robine@gmail.com', 'heyitsrobin')

    expect(engineer.github).toEqual(expect.any(String)); 
});

//Test Engineer Role
test('Engineer getRole()', () => {
    const engineer = new Engineer('Robin', 6562, 'robine@gmail.com', 'heyitsrobin')

    expect(engineer.getRole()).toBe('Engineer'); 
});
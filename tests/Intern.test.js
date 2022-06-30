const Intern = require('../lib/Intern');

// Creating intern object  
test('creates an Intern object', () => {
    const intern = new Intern('Tianchou', 1, 'tjoe@gmail.com', 'NEU');

    expect(intern.school).toEqual(expect.any(String));
});


test('gets employee school', () => {
    const intern = new Intern('Tianchou', 1, 'tjoe@gmail.com', 'NEU');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});


test('gets role of employee', () => {
    const intern = new Intern('Tianchou', 1, 'tjoe@gmail.com', 'NEU');

    expect(intern.getRole()).toEqual("Intern");
});
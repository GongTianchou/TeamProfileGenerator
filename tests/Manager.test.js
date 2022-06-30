const Manager = require('../lib/Manager');


test('creates an Manager object', () => {
    const manager = new Manager('Tianchou', 1, 'tjoe2@gmail.com', 2);

    expect(manager.officeNum).toEqual(expect.any(Number));
});


test('gets role of employee', () => {
    const manager = new Manager('Tianchou', 1, 'tjoe@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
});
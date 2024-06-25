const { greetUser } = require('../script');

describe('Teste', () => {

    test('Deve exibir nome digitado', () => {
    
        const name = 'John';
        greetUser(name);
        const greetingDiv = document.getElementById('greeting');
        expect(greetingDiv.innerHTML).toBe(`Hello, John!`);
    });
});

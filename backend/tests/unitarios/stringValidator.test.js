const stringValidator = require('../../validators/stringValidator.js');

describe('Validador de para tipo string', () => {
    it('Aqui solo hay string', () => {
        const string = 'Este es mi string';
        expect(stringValidator(string)).toBeTruthy();
    });

    it('Aqui no hay solo string tambien hay numeros', () => {
        const string = 'Aqui n0 s0l0 hay string';
        expect(stringValidator(string)).toBeFalsy();
    });

    it('Aqui no solo hay string tambien hay caracteres especiales', () => {
        const string = "Aqui/no/hay solo sting";
        expect(stringValidator(string)).toBeFalsy();
    });
});
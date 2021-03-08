const fechaInicioValidator = require('../../validators/fechaInicioValidator.js');

describe('Validador para la fecha de inicio', () => {
    it('Esto es una fecha valida', () => {
       const fechaInicio = new Date('2/13/2021');
       const fechaFin = new Date('2/14/2021');
       expect(fechaInicioValidator(fechaInicio, fechaFin)).toBeTruthy();
    });
})
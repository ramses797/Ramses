function fechaInicioValidator(fecha, fechaFin) {
    if(fecha < fechaFin) {
        return true;
    } else {
        return false;
    };
};

module.exports = fechaInicioValidator;

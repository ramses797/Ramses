function stringValidator(string) {
    return /^[A-Za-zÀ-ÿ\s]+$/.test(string);
}

module.exports = stringValidator;

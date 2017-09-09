
const expect = require('chai').expect;
const platzom = require('..').default;

describe('#platzom', function () {
	it('Si la palabra termina en "ar", se le quitan esos dos caracteres', function() {
		const translation = platzom("Programar");
		expect(translation).to.equal("Program");
	});

	it('Si la palabra inicia con Z, se le añade "pe" al final', function() {
		const translation = platzom("Zorro");
		const translation2 = platzom("Zarpar");
		expect(translation).to.equal("Zorrope");
		expect(translation2).to.equal("Zarppe");
	});

	it('Si la palabra traducida tiene 10 o más letras, se debe partir a la mitad y unir con un guión del medio', function() {
		const translation = platzom("tieneMasDiezLetras");
		expect(translation).to.equal("tieneMasD-iezLetras");
	});

	it('Si la palabra original es un palí­ndromo, ninguna regla anterior cuenta y se devuelve la misma palabra intercalando mayúsculas y minúsculas', function() {
		const translation = platzom("anina");
		expect(translation).to.equal("AnInA");
	});
});
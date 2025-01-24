const calculadora = require("../models/carculadora.js");
test("somar 2 + 2 é igual a 4", () => {
  const resultado = calculadora.somar(2, 2);
  expect(resultado).toBe(4);
});

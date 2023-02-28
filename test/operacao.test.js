const { describe, expect, it } = require("@jest/globals");
const calculadora = require("../src/operacoes");
//--SOMA--
describe("Teste da calculadora", () => {
  it("Operação de soma", () => {
    let resultado = calculadora.soma(2, 2);
    expect(resultado).toEqual(4);

    resultado = calculadora.soma(50, 5);
    expect(resultado).toEqual(55);

    resultado = calculadora.soma(120, -20);
    expect(resultado).toEqual(100);

    resultado = () => calculadora.soma(45, "l");
    expect(resultado).toThrow("Não é um número");

    resultado = () => calculadora.soma("l", 2);
    expect(resultado).toThrow("Não é um número");
  });
//--SUBTRAÇÃO--
  it("Operacao Subi", () => {
    let resultado = calculadora.subi(1, 7);
    expect(resultado).toEqual(-6);

    resultado = calculadora.subi(0, 8);
    expect(resultado).toEqual(-8);

    resultado = calculadora.subi(34, -34);
    expect(resultado).toEqual(68);

    resultado = () => calculadora.subi(50, "l");
    expect(resultado).toThrow("Não é um número");

    resultado = () => calculadora.subi("l", 4);
    expect(resultado).toThrow("Não é um número"); 
  });
//--DIVISÃO--
  it("Operacao divi", () => {
    let resultado = calculadora.divi(80, 2);
    expect(resultado).toEqual(40);

    resultado = calculadora.divi(10, 5);
    expect(resultado).toEqual(2);

    resultado = calculadora.divi(6, -2);
    expect(resultado).toEqual(-3);

    resultado = calculadora.divi(7, 45);
    expect(resultado).toEqual(0.15555555555555556);

    resultado = () => calculadora.divi(8, 0);
    expect(resultado).toThrow("Erro");

    resultado = calculadora.divi(9, 10);
    expect(resultado).toEqual(0.9);

    resultado = calculadora.divi(90, 90);
    expect(resultado).toEqual(1);

    resultado = () => calculadora.divi(89, "l");
    expect(resultado).toThrow("Não é um número");

    resultado = () => calculadora.divi("l", 10);
    expect(resultado).toThrow("Não é um número");
  });
//--MULTIPLICAÇÃO--
  it("Operacao Multi", () => {
    let resultado = calculadora.multi(1, 6);
    expect(resultado).toEqual(6);

    resultado = calculadora.multi(2, 2);
    expect(resultado).toEqual(4);

    resultado = calculadora.multi(5, 5);
    expect(resultado).toEqual(25);

    resultado = calculadora.multi(60, 10);
    expect(resultado).toEqual(600);

    resultado = calculadora.multi(100, 10);
    expect(resultado).toEqual(1000);

    resultado = calculadora.multi(58, 9);
    expect(resultado).toEqual(522);

    resultado = () => calculadora.multi(56, "l");
    expect(resultado).toThrow("Não é um número");

    resultado = () => calculadora.multi("l", 3);
    expect(resultado).toThrow("Não é um número");
  });
//--POTENCIA--
  it("Operacao poti", () => {
    let resultado = calculadora.poti(7, 4);
    expect(resultado).toEqual(2401);

    resultado = calculadora.poti(99, 2);
    expect(resultado).toEqual(9801);

    resultado = calculadora.poti(4, 16);
    expect(resultado).toEqual(4294967296);

    resultado = calculadora.poti(9, 5);
    expect(resultado).toEqual(59049);

    resultado = calculadora.poti(66, 1);
    expect(resultado).toEqual(66);

    resultado = calculadora.poti(5, 2);
    expect(resultado).toEqual(25);

    resultado = calculadora.poti(3, 3);
    expect(resultado).toEqual(27);

    resultado = () => calculadora.poti(2, "l");
    expect(resultado).toThrow("Não é um número");

    resultado = () => calculadora.poti("l", 8);
    expect(resultado).toThrow("Não é um número");
  });
//--RAIZ--
  it("Operacao raiz", () => {
    let resultado = calculadora.raiz(Math.sqrt(5));
    expect(resultado).toEqual(1.4953487812212205);

    resultado = calculadora.raiz(Math.sqrt(2));
    expect(resultado).toEqual(1.189207115002721);

    resultado = calculadora.raiz(Math.sqrt(18));
    expect(resultado).toEqual(2.0597671439071177);

    resultado = calculadora.raiz(Math.sqrt(70));
    expect(resultado).toEqual(2.892507608519078);

    resultado = calculadora.raiz(Math.sqrt(81));
    expect(resultado).toEqual(3);

    resultado = calculadora.raiz(Math.sqrt(63));
    expect(resultado).toEqual(2.8173132472612576);

    resultado = calculadora.raiz(Math.sqrt(50));
    expect(resultado).toEqual(2.6591479484724942);

    resultado = calculadora.raiz(Math.sqrt(200));
    expect(resultado).toEqual(3.760603093086394);

    resultado = () => calculadora.raiz(Math.sqrt("l"));
    expect(resultado).toThrow("Não é um número");

  });
});
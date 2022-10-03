/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */



function Calculator(a, b) {
    this.a = a;
    this.b = b;
}

Calculator.prototype.sum = function (a, b) {
    return a + b
}

Calculator.prototype.subtraction = function (a, b) {
    return a - b
}

Calculator.prototype.multiplication = function (a, b) {
    return a * b
}

Calculator.prototype.division = function (a, b) {
    return a / b
}

console.log(Calculator.prototype.sum(5, 8))
console.log(Calculator.prototype.subtraction(5, 8))
console.log(Calculator.prototype.multiplication(5, 8))
console.log(Calculator.prototype.division(10, 5))
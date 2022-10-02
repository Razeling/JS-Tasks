/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

function weightConverter() {
    const inputValue = document.getElementById("search").value;
    document.getElementById("pounds").textContent = "Pounds: " + inputValue * 2.2046 + " lbs";
    document.getElementById("grams").textContent = "Grams: " + inputValue / 0.0010000 + " g";
    document.getElementById("ounces").textContent = "Ounces: " + inputValue * 35.274 + " oz";
}
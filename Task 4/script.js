/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

function printCarBrands() {
    output = document.getElementById('output')
    fetch(ENDPOINT)
    .then((response) => response.json())
    .then((data) =>{
        for (let i = 0; i < data.length; i++) {
            let newDiv = document.createElement("div");
            newDiv.className = "Card";
            let newContent;
            newDiv.innerHTML = 'Brand: ' + data[i].brand + '<br>' + 'Models:  ' + data[i].models + '<br><br>'
            output.appendChild(newDiv)
        }
    }
)};
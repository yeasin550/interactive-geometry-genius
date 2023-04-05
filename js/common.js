// function to get input value inputs
function triangleInput(value1,value2){
    const triangleFirstField = document.getElementById(value1);
    const triangleFirstFieldString = triangleFirstField.value;
    const newTriangleFirstField = parseFloat(triangleFirstFieldString);
    const triangleB = document.getElementById(value2);
    triangleB.innerText = newTriangleFirstField;
    triangleFirstField.value = '';
    return newTriangleFirstField;
}
// function for to do list
function container(shape ,size ){
    const container = document.getElementById('container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${shape}</td>
    <td>${size}\cm<sup>2</sup></td>
    <button class="btn btn-active btn-secondary">Covert to m<sup>2</sup></button>`;
    container.appendChild(tr);
}
// function for get titles formula
function formula(id){
    const triangleFormula = document.getElementById(id);
    const triangleFormulaString = triangleFormula.innerText;
    const triangleFormulaNumber = parseFloat(triangleFormulaString);
    return triangleFormulaNumber;
}

///////////////////////////// rgb color>>>>>>>>>>>>>>>
// function for get random rgb value
function callrgb(){
    const red =Math.floor(Math.random()*255);
    const green =  Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);
    return `rgb(${red},${green},${blue})`;
}
// function for card backgroundColor
function changeColor(id){
    const cards = document.getElementById(id);
   const background = callrgb();
   cards.style.backgroundColor = background;
   
}

//function for cards random color changer
function colorChanger(id){
    const changeCardColor =  changeColor(id)
    return changeCardColor;
}
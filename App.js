const calculateTemp = (event) =>{
    event.preventDefault();
    const numberTemp = document.getElementById('temp').value

const tempSelected = document.getElementById('temp_diff');
const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;

const celToFah = (numberTemp) =>{
    let fahrenheit = Math.round((numberTemp*9/5)+32);
    return fahrenheit;
}

const fahToCel = (numberTemp) =>{
    let celsius = Math.round((numberTemp-32)*5/9);
    return celsius;
}
let result;

if(valueTemp=='cel'){
    result = celToFah(numberTemp);
    document.getElementById('resultContainer').innerHTML = `=${result}°Fahrenheit`;
}else{
    result = fahToCel(numberTemp);
    document.getElementById('resultContainer').innerHTML = `=${result}°Celsius`;
    }
}
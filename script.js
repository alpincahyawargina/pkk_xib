let displayvalue = '';

function Calculator(button){
    const value = button.innertext;

    if(value === '='){
        try{
            displayvalue = eval(displayvalue)
        } catch{error}{
            displayvalue = 'Error';
        }
    } else if (value === 'C'){
        displayvalue = '';
    } else{
        displayvalue += value;
    }
    document.getElementById('display').value = displayvalue;
}
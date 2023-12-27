
let timeOut;

//debouncing
function debounc(){
    clearTimeout(timeOut);

    setTimeout(() => {
        calculate();
    }, 100);
}

function calculate(){
    const principle = parseInt(document.getElementById('principle').value);
    const no = parseInt(document.getElementById('No').value);
    const rate = parseInt(document.getElementById('rate').value);
    const element = document.getElementById('result');

    let url = 'http://localhost:8000/calculateInterest';

    let reqBody = {
        principle : principle,
        no : no,
        rate : rate
    };

    fetch(url, {
        method : 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body : JSON.stringify(reqBody),
    })
    .then((response)=>{
        response.json()
        .then((finalRes)=>{
            element.innerHTML = finalRes.intrest;
            console.log(finalRes.intrest);
        })
    });    
}

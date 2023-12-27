function getUsersData(){
    const res =  fetch('http://localhost:8000/calculateSum')
        .then((response)=>{
            response.json()
            .then((finalData)=>{
                loadDataOnUI(finalData);
                //console.log(finalData.user);
            })
        });
    
    console.log("Doneee..");
}

function loadDataOnUI(data){
    let container = document.getElementsByClassName('main');

    let table = document.getElementById('user-table');

    
    let count = 1;
    data.forEach(user => {

        let row = table.insertRow(1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);

        cell1.innerHTML = user.id;
        cell2.innerHTML = user.firstname;
        cell3.innerHTML = user.email;
        cell4.innerHTML = user.gender;
        cell5.innerHTML = user.phone;

        count++;
    });
}
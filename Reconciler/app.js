let globalId = 1;

function addToDo(){
    const title = document.getElementById('title').value;
    const discription = document.getElementById('discription').value;
    const list = document.getElementById('todo-list');

    

    list.appendChild(createChild(title, discription, globalId++));
    
}


function createChild(title, discription, id){

    let outerDiv = document.createElement('div');

    let titleDiv = document.createElement('div');
    let desceDiv = document.createElement('div');
    let btn = document.createElement('button');

    titleDiv.innerHTML = title;
    desceDiv.innerHTML = discription;
    btn.innerHTML = 'Mark as Done'
    btn.setAttribute('onclick', `markAsDone(${id})`);

    outerDiv.appendChild(titleDiv);
    outerDiv.appendChild(desceDiv);
    outerDiv.appendChild(btn);
    outerDiv.setAttribute('id', id);

    return outerDiv;

}

function markAsDone(id){
    const div = document.getElementById(id);
    console.log(div);
    div.lastChild.innerHTML = 'Done';
}






































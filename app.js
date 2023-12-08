const item = document.querySelector('#newToDo');
const input = document.querySelector('#newToDo input');
const list = document.querySelector('ul');
let toDos = [];

if (localStorage.getItem('toDos')) {
    toDos = JSON.parse(localStorage.getItem('toDos'))
    for(let t of toDos){
        const newDo = document.createElement('li');
        newDo.innerText = t;
        list.append(newDo);
    }
}
item.addEventListener('submit', function(e){
    e.preventDefault();
    const newToDo = document.createElement('li');
    newToDo.innerText=input.value;
    list.append(newToDo);
    toDos.push(input.value);
    localStorage.setItem('toDos', JSON.stringify(toDos));
});
list.addEventListener('click', function(e){
    console.log(e, e.target)
    if (e.target.tagName === 'LI'){
        if(e.altKey){
            toDos.splice(toDos.indexOf(e.target.innerText), 1)
            e.target.remove();
            localStorage.setItem('toDos', JSON.stringify(toDos));
        }
        else{
            e.target.classList.toggle('completed')
        }
    }
})
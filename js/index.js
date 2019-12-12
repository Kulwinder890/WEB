function root() {
    let btn = document.querySelector('#add');
    btn.addEventListener('click', insert);
    show();
}


function adding(item) {
    const store = window.localStorage;
    const list = document.querySelector('#list');
    const node = document.createRange().createContextualFragment(store.getItem(item));
    list.appendChild(node);
}


function show() {
    const store = window.localStorage;
    Object.keys(store).forEach(adding);
    Object.keys(store).forEach((item) => {
       const node = document.createRange().createContextualFragment(store.getItem(item));
    });
};
function update(yup) {
    if (yup.checked) {
        yup.setAttribute('checked', yup.checked);
        alert("are you checking this value if yes procced")
        
    } else {
        yup.removeAttribute('checked');
        alert("are you sure to uncheck this value");  
    }
    const itemString = new XMLSerializer().serializeToString(yup.parentNode);
    const id = yup.id;
    window.localStorage.setItem(id, itemString);
}

function insert(event) {
    event.preventDefault();

    const todo = document.querySelector('#todol');
    const value = todo.value.trim();

    if (value.length > 0) {
        const hash = (Date.now().toString(36).substr(2, 4) + performance.now().toString(36).replace('.','').substr(0, 4) + Math.random().toString(36).substr(3, 4)).toUpperCase();

        const id = `todo-select-${hash}`;
        const template = document.querySelector('#list-item');
        const item = document.importNode(template.content, true);
        const label = item.querySelector('label[for]');
        const input = item.querySelector('#todo-select')
        const list = document.querySelector('#list');

        input.setAttribute('id', id);
        label.setAttribute('for', id);

        label.textContent = value;
        const store = window.localStorage;
        const itemString = new XMLSerializer().serializeToString(item);
        store.setItem(id, itemString);

        list.appendChild(item);
    }
      else{
        alert("It cant be left empty");   
    }
    todo.value = '';
}
 function removef(evt)
 {
    evt.preventDefault();
    var ab = evt.currentTarget.parentNode.querySelector('input').id;
     localStorage.removeItem(ab);
     const item = evt.currentTarget.parentNode;
     const list = item.parentNode;
     list.removeChild(item);
 }
var anm = document.getElementById("tit");
function animate()
{
    anm.style.animation = "pulse 4s 2"
}
anm.addEventListener("animationstart", startfunction);
anm.addEventListener("animationend", endfunction);

function startfunction()
{
    anm.style.backgroundColor ="black";
}


function endfunction()
{
    anm.style.backgroundColor ="aqua";
}
root();


// 6. На задатак са часа (ToDo листа), додати дугме Remove Selected које брише из листе све селектоване таскове
const remove = document.querySelector('#btn-remove');
remove.addEventListener('click',removeItems);

function removeItems(e){
    if(!confirm('Are you sure?')){
        return;
    }
    let checkbox = document.querySelector('input:checked');
    let toRemove = checkbox.parentElement.parentElement;
    toRemove.remove();

}

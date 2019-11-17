// 7. На задатак са часа (ToDo листа), додати дугме Select Inverted које мења знак checkbox-овима,
//тј оне које нису селектовани селектује и обрнуто
const inverted = document.querySelector('#btn-invert');
inverted.addEventListener('click',invertItems);

function invertItems(e){
    if(!confirm('Are you sure?')){
        return;
    }
    let checkboxChecked = document.querySelector('input[type="checkbox"]:checked');
    let checkboxNotChecked = document.querySelector('input[type="checkbox"]:not(checked)');
    checkboxChecked.click();
    checkboxNotChecked.click();

}
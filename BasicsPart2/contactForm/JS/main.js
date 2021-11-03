//ensure that a warning is given for any fields submitted blank
function validateForm() {
    let x = document.forms['exampleForm']['dest'].value;
    let y = document.forms['exampleForm']['month'].value;
    if (x=='' || y=='') {
        alert('Error:  All fields must be filled out.');
        return false;
    }
}
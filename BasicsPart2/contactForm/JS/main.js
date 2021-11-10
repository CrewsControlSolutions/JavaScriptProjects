//ensure that a warning is given for any fields submitted blank
function validateForm() {
    let x = document.forms['exampleForm']['dest'].value;
    let y = document.forms['exampleForm']['month'].value;
    let z = document.forms['exampleForm']['phone'].value;
    if (x=='' || y=='' || z=='') {
        alert('Error:  All fields must be filled out.');
        return false;
    }
}

function openForm() {
    document.getElementById('contactUs').style.display = 'block';
}

function closeForm() {
    document.getElementById('contactUs').style.display = 'none';
}
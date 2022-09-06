document.getElementById('btn-add-name').addEventListener('click', function () {
    const nameField = document.getElementById('name-field');
    const namevalue = nameField.value;

    localStorage.setItem('name', namevalue)
})

document.getElementById('btn-add-age').addEventListener('click', function () {
    const ageField = document.getElementById('age-field');
    const ageValue = ageField.value;

    localStorage.setItem('age', ageValue)
})

document.getElementById('btn-remove-name').addEventListener('click', function () {
    localStorage.removeItem('name')
})

document.getElementById('btn-remove-age').addEventListener('click', function () {
    localStorage.removeItem('age')
})

document.getElementById('btn-clear-LS').addEventListener('click', function () {
    localStorage.clear();
})
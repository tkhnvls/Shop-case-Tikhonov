function updateButton() {
    const lastName = localStorage.getItem('lastName') || 'Тихонов';
    const firstName = localStorage.getItem('firstName') || 'Елизавета';
    const button = document.getElementById('changeButton');

    if (lastName.includes('Т') || firstName.includes('Е')) {
        button.innerText = 'Поменять на латиницу';
    } else {
        button.innerText = 'Поменять на кириллицу';
    }
}

document.getElementById('changeButton').addEventListener('click', function() {
    let lastName = localStorage.getItem('lastName') || 'Тихонов';
    let firstName = localStorage.getItem('firstName') || 'Елизавета';

    if (lastName.includes('Т') || firstName.includes('Е')) {
        lastName = 'Tikhonov';
        firstName = 'Elizaveta';
    } else {
        lastName = 'Тихонов';
        firstName = 'Елизавета';
    }

    localStorage.setItem('lastName', lastName);
    localStorage.setItem('firstName', firstName);

    document.getElementById('lastName').innerText = 'Фамилия: ' + lastName;
    document.getElementById('firstName').innerText = 'Имя: ' + firstName;

    updateButton();
});

document.getElementById('lastName').innerText = 'Фамилия: ' + (localStorage.getItem('lastName') || 'Тихонов');
document.getElementById('firstName').innerText = 'Имя: ' + (localStorage.getItem('firstName') || 'Елизавета');

updateButton();
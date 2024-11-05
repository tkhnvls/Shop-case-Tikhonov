function updateButton() {
    const lastName = localStorage.getItem('lastName') || 'ТИХОНОВ';
    const firstName = localStorage.getItem('firstName') || 'ЕЛИЗАВЕТА';
    const button = document.getElementById('changeButton');

    if (lastName.includes('Т') || firstName.includes('Е')) {
        button.innerText = 'Поменять на латиницу';
    } else {
        button.innerText = 'Поменять на кириллицу';
    }
}

document.getElementById('changeButton').addEventListener('click', function() {
    let lastName = localStorage.getItem('lastName') || 'ТИХОНОВ';
    let firstName = localStorage.getItem('firstName') || 'ЕЛИЗАВЕТА';

    if (lastName.includes('Т') || firstName.includes('Е')) {
        lastName = 'TIKHONOV';
        firstName = 'ELIZAVETA';
    } else {
        lastName = 'ТИХОНОВ';
        firstName = 'ЕЛИЗАВЕТА';
    }

    localStorage.setItem('lastName', lastName);
    localStorage.setItem('firstName', firstName);

    document.getElementById('lastName').innerText = lastName;
    document.getElementById('firstName').innerText = firstName;

    updateButton();
});

document.getElementById('lastName').innerText = (localStorage.getItem('lastName') || 'ТИХОНОВ');
document.getElementById('firstName').innerText = (localStorage.getItem('firstName') || 'ЕЛИЗАВЕТА');

updateButton();
document.getElementById('verify').addEventListener('click', function() {
    let a = parseInt(document.querySelector('input[name="a"]').value);
    let b = parseInt(document.querySelector('input[name="b"]').value);
    let x = parseInt(document.querySelector('input[name="x"]').value);
    let low = Math.min(a, b);
    let high = Math.max(a, b);
    let resultText;
    if (x >= low && x <= high) {
        resultText = "X принадлежит заданному промежутку [a, b].";
    } else {
        resultText = "X не принадлежит заданному промежутку [a, b].";
    }
    alert(resultText);
});

document.getElementById('submit').addEventListener('click', function() {
    alert("Отправлено!");
});
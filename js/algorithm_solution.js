document.getElementById('verify').addEventListener('click', function() {
    let a = parseInt(document.getElementById('inputA').value);
    let b = parseInt(document.getElementById('inputB').value);
    let c = parseInt(document.getElementById('inputC').value);
    
    let low = Math.min(a, b);
    let high = Math.max(a, b);
    
    let resultText;
    if (c >= low && c <= high) {
        resultText = "Число X принадлежит заданному промежутку [a, b].";
    } else {
        resultText = "Число X принадлежит заданному промежутку [a, b].";
    }

    document.getElementById('result').innerText = resultText;
    alert(resultText);
});

let data = [];

function readData() {
    let start = new Date(document.getElementById('start').value);
    let end = new Date(document.getElementById('end').value);
    let startValue = document.getElementById('startVal').value;
    let endValue = document.getElementById('endVal').value;
    startValue = startValue.replace(",", ".");
    endValue = endValue.replace(",", ".");
    startValue = parseFloat(startValue);
    endValue = parseFloat(endValue);
    
    let daysNum = (end - start) / (1000 * 24 * 60 * 60);
    let income = ((endValue - startValue) / (startValue)) * 100;
    income = income.toPrecision(2);

    let change = {
        start: start,
        end: end,
        days: daysNum,
        income: income
    };

    data.push(change);
    
}

function showResults() {
    let parent = document.getElementById('results');
    let node = document.createElement('div');

    for (let i = 0; i < data.length; i++){
        node.innerHTML = "Czas zmiany: " + data[i].days + " dni." + " Zmiana wartości: " + data[i].income+"%";
        parent.appendChild(node);
    }
}

document.getElementById('run').addEventListener('click', readData);
document.getElementById('run').addEventListener('click', showResults);
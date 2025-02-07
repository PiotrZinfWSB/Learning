const now = new Date();

function addNewSample() {
    let id = document.getElementById('sampleName').value;
    let begin = new Date(document.getElementById('begin').value);
    let duration = parseInt(document.getElementById('duration').value);
    let end = new Date(Date.parse(begin) + (duration * 1000 * 60 * 60));
    
    let sep = " || ";
    let testInput = id + ": Początek: " + sep + begin + sep + duration + sep+ "Koniec: " + end;
    document.getElementById('qSun').innerHTML = testInput;
}

document.getElementById('run').addEventListener('click', addNewSample);
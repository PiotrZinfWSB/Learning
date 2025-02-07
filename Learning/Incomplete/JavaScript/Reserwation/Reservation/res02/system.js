
function process(){
    let user = document.getElementById('user').value;
    let sampleNum = parseInt(document.getElementById('number').value);
    let hours = parseInt(document.getElementById('hNumber').value);
    let start = new Date(document.getElementById('start').value);
    let begin = start.getTime();
    let end = start.getTime() + (hours*60*60*1000);
    let duration = end - begin;
    let fromStartToNow = new Date().getTime()-begin;
    let progress = 100*fromStartToNow/duration;
    document.getElementById('test').innerHTML = user+': '+ parseInt(progress) + '%';
    document.getElementById('test').ariaValueMin = start.getTime();
    document.getElementById('test').ariaValueMax = start.getTime() + (hours*60*60*1000);
    document.getElementById('test').ariaValueNow = new Date().getTime();
    document.getElementById('test').style.width = parseInt(progress)+'%';
    
}


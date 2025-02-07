document.getElementById('runBtn').addEventListener('click', function(event){
    event.preventDefault(); 

    const chamber = document.querySelector('input[name="chambersGroup"]:checked').value;
    const user = document.getElementById('user').value;
    const sampleId = document.getElementById('sampleId').value;
    const start = new Date(document.getElementById('start').value);
    const duration = parseInt(document.getElementById('time').value);
    const end = new Date(start.getTime() + (duration*60*60*1000));

    console.log(chamber)
})
document.getElementById('run').addEventListener('click', function(){
    const user = document.getElementById('user').value;
    const sampleName = document.getElementById('sampleName').value;
    const hNum = parseInt(document.getElementById('hNum').value);
    const begin = new Date(document.getElementById('begin').value);
    const end = new Date(begin.getTime()+(hNum*1000*60*60));

    const specimen = [{
        user: user,
        sampleName: sampleName,
        hNum: hNum,
        begin: begin,
        end: end
    }]

    document.getElementById('test').innerHTML = specimen[0].end;
    console.log(specimen);
})


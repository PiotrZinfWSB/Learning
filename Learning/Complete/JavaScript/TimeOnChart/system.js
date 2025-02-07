const samples = { id: [], time: [], start: [], end: [] };

document.getElementById('run').addEventListener('click', function () {
    let id = document.getElementById('id').value;
    let time = parseInt(document.getElementById('duration').value);
    let start = new Date(document.getElementById('begin').value);
    let end = new Date(start.getTime() + (time * 1000 * 60 * 60));

    samples.id.push(id);
    samples.time.push(time);
    samples.start.push(start);
    samples.end.push(end);

    const data = [];
    for (let i = 0; i < samples.id.length; i++){
        data.push({
            x: [samples.start[i], samples.end[i]],
            y: [samples.id[i], samples.id[i]],
            mode: 'lines'
        })
    };
    const layout = { title: "test" };

    Plotly.newPlot('plot', data, layout);
})
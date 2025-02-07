var samples = [];
var now = new Date();
//Function adding a new sample
function addNewSample(){

    //Reading data from the form
    let name = document.getElementById('sampleNme').value;
    let begin = new Date(document.getElementById('start').value);
    let time = parseInt(document.getElementById('hNum').value);
    
    //Calculating the date of the examination
    let end = new Date(begin.getTime()+(time*60*60*1000));

    //Creating a sample object
    let sample={
        id: name,
        begin: begin,
        time: time,
        end: end
    }

    //Adding the sample to the samples array
    samples.push(sample);
}

document.getElementById('run').addEventListener('click', addNewSample);

function displayResults(){

    const data=[];
    data.forEach(item=>data.push(item));


    const plotData = [{
        x: {data.begin, data.end},
        y: data.name, data.name,
        type:"line",
        marker: {

        }
    }]

    Plotly.newPlot("qSun", plotData);
}
document.getElementById('run').addEventListener('click', displayResults);
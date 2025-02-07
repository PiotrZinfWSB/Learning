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

    console.log(samples);

}

//Function that displays results 
function displayResults(){
    let node = document.createElement('div');
    node.style.height = "20px";
    node.style.backgroundColor = "rgb(60, 94, 158)";
    let chamber = document.getElementById('qSun');

    for (let i=0; i < samples.length ; i++){
        node.style.width = samples[i].time + "px";
        node.textContent = samples[i].id;
        chamber.appendChild(node);
    }
}

document.getElementById('run').addEventListener('click', addNewSample);
document.getElementById('run').addEventListener('click', displayResults);
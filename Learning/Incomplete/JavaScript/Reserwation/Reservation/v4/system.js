const now = new Date();
const processes = [];
function newProcess(){
    //Reading data
    const chamber = document.getElementById('chamber').value;
    const begin = new Date(document.getElementById('begin').value);
    const user = document.getElementById('user').value;
    const hNum = parseInt(document.getElementById('hNum').value);
    const sample = document.getElementById('sampleId').value;
    
    //Calculating end of the prcess
    const end = new Date(begin.getTime() + (hNum*60*60*1000));
    const duration = (end.getTime()-begin.getTime());
    
    //Visualisation

    //Creating a progressbar
    let node = document.createElement('div');
    node.className= "progressbar";
    node.role = "progressbar";
    node.ariaValueMin = "0";
    node.ariaValueMax = "100";
    let progressBar = document.createElement('div');
    let progressBarWidth = parseInt(((now.getTime()-begin.getTime())/duration)*100);
    if (progressBarWidth<0){
        progressBar.style.width = "0";
    }
    else if(progressBarWidth>100){
        progressBar.style.width = "100%";
    }
    else{
        progressBarWidth = progressBarWidth.toString().concat("%");
        progressBar.style.width = progressBarWidth;
    }
    progressBar.className = "progress-bar progress-bar-striped progress-bar-animated overflow-visible bg-info";
    document.getElementById('qSunContent').appendChild(node);
    node.appendChild(progressBar);
    progressBar.style.display = "inline-block";
    progressBar.innerHTML = user + ": " + sample + " koniec: " + end.getDate()+ "/" + (end.getMonth()+1) + "/" + end.getFullYear();
    //Adding "REMOVE" button on the end of the progressbar
    let removeButton = document.createElement('button')
    removeButton.className = "btn btn-warning";
    removeButton.onclick = "remove()";
    removeButton.innerText = "Usuń";
    progressBar.appendChild(removeButton);

}

document.getElementById("accept").addEventListener("click", newProcess);
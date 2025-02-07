function createNumbers(size) {
    const numbers = [];
    for (let i = 0; i < size; i++){
        numbers.push(Math.round(Math.random()*100));
    }
    return numbers;
}

//Bubble sort
 document.getElementById('run').addEventListener('click', function () {
    const begin = new Date(); // <- for further analysis
    //Creating an array of numbers of size given by user
    let arrLen = parseInt(document.getElementById('nNum').value);
    let numbers = createNumbers(arrLen);
    //Printing the origianl array
    const parent = document.getElementById('results');
    /*let beforeNode = document.createElement('div');
    beforeNode.innerHTML = numbers;
    parent.appendChild(beforeNode);*/
    //Sorting algorythm
    let bubles;
    let totalBubles = 0;
    do {
        bubles = 0;
        for (let i = 0; i < numbers.length - 1; i++) {
            if (numbers[i] <= numbers[i + 1])
                continue
            else {
                [numbers[i], numbers[i + 1]] = [numbers[i + 1], numbers[i]];
                bubles += 1;
                totalBubles += 1;
            }
        }
    }
        while (bubles > 0)
        //Time analysis
        const end = new Date();
        let duration = (end - begin) / 1000;
        duration = duration.toFixed(10);
        //Printing sorted array
        /*let afterNode = document.createElement('div');
        afterNode.innerHTML = numbers;
        parent.appendChild(afterNode);*/
        let analysis = document.createElement('div');
        analysis.innerHTML = "There were " + totalBubles + " bubles. It lasted " + duration + "s."
        parent.appendChild(analysis);
})



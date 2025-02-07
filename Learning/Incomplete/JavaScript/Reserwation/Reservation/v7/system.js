document.getElementById('run').addEventListener('click', ()=>{
    //Collecting data
    const user = document.getElementById('user').value;
    const chamber = document.querySelector('input[name="flexRadioDefault"]:checked').value;
    const sampleId = document.getElementById('sampleId').value;
    const itemsNo = parseInt(document.getElementById('itemsNo').value);
    const start = new Date(document.getElementById('start').value);
    const duration = parseInt(document.getElementById('duration').value);
    const step = parseInt(document.getElementById('step').value);
    //Calculating the date of the end of the research
    const end = new Date(start.getTime() + (duration * 60 * 60 * 1000));
    const steps = parseInt((end.getTime()-start.getTime())/(step*60*60*1000));
    //Input error control
    if(user===""|chamber===""|sampleId===""|isNaN(itemsNo)|isNaN(duration)|isNaN(step)){
        alert("Nie wprowadzono wszystkich danych")
    }
    
    //Adding research component 
    let spotsLeft;
    let parentNode;
    switch(chamber){
        case "Q-Sun":
            parentNode = document.getElementById("qSunScreen");
            spotsLeft = qSun.freeSpots - itemsNo;
            if (spotsLeft < 0) {
                alert("Za mało miejsca! Brakuje " + spotsLeft + " miejsc.")
                return
            }
            qSun.freeSpots = spotsLeft;
            break;
        case "uv1":
            parentNode = document.getElementById("uv1Screen");
            spotsLeft = uv1.freeSpots - itemsNo;
            if (spotsLeft < 0) {
                alert("Za mało miejsca! Brakuje " + spotsLeft + " miejsc.")
                return
            }
            uv1.freeSpots = spotsLeft;
            break;
        case "uv2":
            parentNode = document.getElementById("uv2Screen");
            spotsLeft = uv2.freeSpots - itemsNo;
            if (spotsLeft < 0) {
                alert("Za mało miejsca! Brakuje " + spotsLeft + " miejsc.")
                return
            }
            uv2.freeSpots = spotsLeft;
            break;
        case "Komora solna":
            parentNode = document.getElementById("brineScreen");
            spotsLeft = brine.freeSpots - itemsNo;
            if (spotsLeft < 0) {
                alert("Za mało miejsca! Brakuje " + spotsLeft + " miejsc.")
                return
            }
            brine.freeSpots = spotsLeft;
            break;
        case "Komora kondensacyjna":
            parentNode = document.getElementById("humidScreen");
            spotsLeft = humid.freeSpots - itemsNo;
            if (spotsLeft < 0) {
                alert("Za mało miejsca! Brakuje " + spotsLeft + " miejsc.")
                return
            }
            humid.freeSpots = spotsLeft;
            break;
        default:
            alert("Nie wybrano komory");    
    }
    if (spotsLeft < 0) {
        alert("Za mało miejsca! Brakuje " + spotsLeft + " miejsc.")
        return
    }
    const outerBar = document.createElement('div');
    outerBar.className = "progress mb-2";
    outerBar.role = "progressbar";
    outerBar.style.height = "50px";
    const innerBar = document.createElement('div');
    innerBar.className = "progress-bar progress-bar-striped progress-bar-animated bg-primary";
    innerBar.ariaValueMin = 0;
    innerBar.ariaValueMax = 100;
    let barWidth = parseInt(((new Date().getTime()-start.getTime())/(end.getTime()-start.getTime()))*100)
    innerBar.ariaValueNow = barWidth;
    innerBar.style.width=barWidth+"%";
    innerBar.innerText=sampleId+" "+"do " + end.getDate()+"." + end.getMonth() + "." + end.getFullYear();

    outerBar.appendChild(innerBar);
    parentNode.appendChild(outerBar);
    reloadChambers();
    
})

const qSun = {
    spots: 50,
    freeSpots: 50,
    totalTime: 100,
}
const uv1 = {
    spots: 48,
    freeSpots: 48,
    totalTime: 100,
    lamp: "A"
}
const uv2 = {
    spots: 48,
    freeSpots: 48,
    totalTime: 100,
    lamp: "B"
}
const brine = {
    spots: 120,
    freeSpots: 120
}
const humid = {
    spots: 48,
    freeSpots: 48
}

function reloadChambers() {
    document.getElementById('qSunSpots').innerHTML = "Wolne miejsca: " + qSun.freeSpots;
    document.getElementById('qSunTotalTime').innerHTML = "Całkowity czas: " + qSun.totalTime + "h";
    document.getElementById('uv1TotalTime').innerHTML = "Całkowity czas: " + uv1.totalTime;
    document.getElementById('uv1Spots').innerHTML = "Wolne miejsca: " + uv1.freeSpots;
    document.getElementById('uv1Lamp').innerHTML = "Rodzaj lampy: " + uv1.lamp;
    document.getElementById('uv2TotalTime').innerHTML = "Całkowity czas: " + uv2.totalTime;
    document.getElementById('uv2Spots').innerHTML = "Wolne miejsca: " + uv2.freeSpots;
    document.getElementById('uv2Lamp').innerHTML = "Rodzaj lampy: " + uv2.lamp;
    document.getElementById('brineSpots').innerHTML = "Wolne miejsca: " + brine.freeSpots;
    document.getElementById('humidSpots').innerHTML = "Wolne miejsca: " + humid.freeSpots;
}

window.addEventListener('load', reloadChambers);
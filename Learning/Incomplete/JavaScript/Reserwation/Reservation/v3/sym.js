function newSymulation(){

    let begin = new Date(document.getElementById('begin').value);
    let duration = parseInt(document.getElementById('hNum').value);
    let end = new Date(begin.getTime() + (duration*60*60*1000));
    
    let dayName =["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota", "Niedziela"];
    /*
    document.getElementById('endDate').innerHTML += " " + end.getDate() + "-" + (end.getMonth()+1) + "-" + end.getFullYear() + "  " + dayName[end.getDay()-1];
    document.getElementById('endClock').innerHTML += " " + end.getHours() + ":" + end.getMinutes();
    document.getElementById('endDate').style.display = "unset";
    document.getElementById('endClock').style.display = "unset";*/
        
    
}


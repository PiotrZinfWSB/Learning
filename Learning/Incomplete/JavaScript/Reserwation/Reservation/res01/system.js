const present = new Date();
const calenderBegin = new Date(present.getTime() - (15*24*60*60*1000));
const calenderEnd = new Date(present.getTime() + (15*24*60*60*1000));
const collection = document.getElementsByClassName('chamber');

for(let i =calenderBegin.getTime(); i<=calenderEnd.getTime(); i+=(24*60*60*1000)){
    let element = document.createElement('div');
    element.className = 'date';
    let date = new Date(i);
    let node = document.createTextNode((date.getDay()+1)+"-"+(date.getMonth()+1)+"-"+date.getFullYear());
    element.appendChild(node);
    collection[0].appendChild(element);
    collection[1].appendChild(element);
    collection[2].appendChild(element);
    collection[3].appendChild(element);
}


window.addEventListener('load', function(){
    const parent = document.getElementById('window')
    
    for(let i =0; i<366; i++){
        let day = document.createElement('div')
    day.className = 'day';
    let workDay = document.createElement('div');
    workDay.className='workDay';
    day.appendChild(workDay);
    parent.appendChild(day)
    }
    
})

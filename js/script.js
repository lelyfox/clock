let secondArrow = document.querySelector('.s'),
    minuteArrow = document.querySelector('.m'),
    hourArrow   = document.querySelector('.h'),
    hoursBox    = document.querySelector('.hours'),
    minutesBox  = document.querySelector('.minutes');
    
function startWatch() {
    let time = new Date(),
        seconds = time.getSeconds(),
        minutes = time.getMinutes(),
        hours   = time.getHours();
        
        secondArrow.style = `transform: rotate(${seconds * 6}deg)`
        minuteArrow.style = `transform: rotate(${minutes * 6}deg)`
        hourArrow.style = `transform: rotate(${hours * 30}deg)`
        
        hoursBox.innerHTML = hours
        minutesBox.innerHTML = minutes
        
        setTimeout(() => startWatch(),1000)
        
}

startWatch()

let li   = document.querySelectorAll('.tabsItem'),
    tabs = document.querySelectorAll('.tabsContentItem');
    
console.log(li);
console.log(tabs);
    
li.forEach((item,i) => {
    item.addEventListener('click', () => {
        removeActive()
        item.classList.add('active')
        tabs[i].classList.add('active')
    })
})

function removeActive () {
    li.forEach((el, i) => {
        el.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}

let watchHours = document.querySelector('.stopwatch__hours'),
    watchMinutes = document.querySelector('.stopwatch__minutes'),
    watchSeconds = document.querySelector('.stopwatch__seconds'),
    tabsSpan = document.querySelector('.tabsLink__span'),
    stopWatch = document.querySelector('.stopwatch__btn');


stopWatch.addEventListener('click', () => {
    if(stopWatch.innerHTML == 'start'){
        stopWatch.innerHTML = 'stop'
        tabsSpan.classList.add('active')
        startTimer()
    }else if(stopWatch.innerHTML == 'stop'){
        stopWatch.innerHTML = 'clear'
        tabsSpan.classList.remove('active')
        tabsSpan.classList.add('active_clear')
        clearTimeout(timeId);
    }else if(stopWatch.innerHTML == 'clear'){
        stopWatch.innerHTML = 'start'
        tabsSpan.classList.remove('active_clear')
        timerSec = 0
        timerMin = 0
        timerHours = 0
        watchSeconds.innerHTML = 0
        watchMinutes.innerHTML = 0
        watchHours.innerHTML = 0
    }
})

let timerSec = 0,
    timerMin = 0,
    timerHours = 0,
    timeId;

function startTimer() {
    timerSec++
    if(timerSec > 59){
        timerSec = 0
        timerMin++
    }
    if(timerMin > 59){
        timerMin = 0
        timerHours++
    }
    watchSeconds.innerHTML = timerSec
    watchMinutes.innerHTML = timerMin
    watchHours.innerHTML = timerHours

    timeId = setTimeout(() => startTimer(),1000) 
}

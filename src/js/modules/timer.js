function timer(timerSelector, deadline) {
    function getClocCalculate() {
        const t = Date.parse(deadline) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60)) % 24),
              minutes = Math.floor((t / (1000 * 60)) % 60),
              seconds = Math.floor((t / 1000) % 60);

        return {
            total: t,
            days,
            hours,
            minutes,
            seconds,
        };   
    }

    function setClock() {
        const timer = document.querySelector(timerSelector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timerId = setInterval(updateClock, 1000);
        
        updateClock();

        function addZero(num) {
            if(num < 10 && num >= 0) {
                return '0' + num;
            } else if(num >= 10) {
                return num;
            } else {
                clearInterval(timerId);
                return '00';
            }
        }
        function updateClock() {
            const t = getClocCalculate();
            days.innerHTML = addZero(t.days);
            hours.innerHTML = addZero(t.hours);
            minutes.innerHTML = addZero(t.minutes);
            seconds.innerHTML = addZero(t.seconds);
        }
        
    }
    setClock();
}

export default timer;
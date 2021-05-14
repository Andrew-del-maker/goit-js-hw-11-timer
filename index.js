
class CountdownTimer{
    constructor(targetDate,selector) {
        this.targetDate = targetDate;
        this.selector = selector;
        this.getTimer();

    }
    get time() {
        return this.calcTimer();
    }
    calcTimer() {
      let now = new Date();
      return this.targetDate - now;
    }
    getTimer(){
        
        
        setInterval(() => {
        let days = Math.floor(this.time / (1000 * 60 * 60 * 24));
        days = days < 10 ? '0' + days : days;
    
        let hours = Math.floor((this.time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        hours = hours < 10 ? '0' + hours : hours;
        
        let mins = Math.floor((this.time % (1000 * 60 * 60)) / (1000 * 60));
        mins = mins < 10 ? '0' + mins : mins;
        
        let secs = Math.floor((this.time % (1000 * 60)) / 1000);
        secs = secs < 10 ? '0' + secs : secs;
            const selector = document.querySelector(`${this.selector}`);
            const spanEls = selector.querySelectorAll('.value');
            
            spanEls.forEach(item => {
                if (item.dataset.value === 'days') {
                    item.innerHTML = days;
                }
                if (item.dataset.value === 'hours') {
                    item.innerHTML = hours;
                }
                if (item.dataset.value === 'mins') {
                    item.innerHTML = mins;
                }
                if (item.dataset.value === 'secs') {
                    item.innerHTML = secs;
                }
            }) 
        }, 1000);
        
    }
}

const timerDate = new CountdownTimer(new Date('Jul 17, 2021'), '#timer-1');


 







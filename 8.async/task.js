class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    };

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Не определен номер звонка');
        }
        if (this.alarmCollection.findIndex((item) =>
            id === item.id) !== -1) {
                console.error('Ошибка. Такой звонок уже существует.');
                return;
        }
        
        this.alarmCollection.push({id, time, callback});
    }

    removeClock(id) {
        let newAlarmCollection = this.alarmCollection.filter((item) => item.id !== id);
        let result = newAlarmCollection === this.alarmCollection;
        this.alarmCollection = newAlarmCollection;
        return result;
    }
     
    getCurrentFormattedTime() {
        let now = new Date();
        let hour = now.getHours();
        let minutes = now.getMinutes();
        return hour + ":" + minutes;
    }

    start() {
        function checkClock(item) {
            let now = this.getCurrentFormattedTime();
            if(item.time === now) {
                item.callback();
            }
        };
        const bindedCheckClock = checkClock.bind(this);
  
        if(!this.timerId) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach((item) => 
                bindedCheckClock(item)) 
            }, 1000)
        }
    }

    stop() {
        if(this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms() {
        this.alarmCollection.forEach((item) =>
            console.log(`Будильник №${item.id} заведен на ${item.time}`));
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}

function testCase() {
    let clock = new AlarmClock();
    
    clock.addClock("15:30", () => console.log('Пора вставать'), 1);
    clock.addClock("15:31", () => {console.log('Давай, вставай уже'); clock.removeClock(2)}, 2);
    clock.addClock("15:32", () => {
        console.log('Вставай, а то проспишь!');
        clock.clearAlarms();
        clock.printAlarms()
    }, 3);

    clock.addClock("15:30", () => console.log('Пора вставать'), 1);

    clock.printAlarms();
    clock.start();
}

testCase();

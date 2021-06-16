class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
        this.currentTimerId = null;
    };

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Не определен номер звонка');
        }
        for (let item of this.alarmCollection) {
            if (id === item.id) {
                console.error('Ошибка. Такой звонок уже существует.');
                return;
            }
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

    getCurrentFormattedTime2() {
        let now = new Date();
        let hour = now.getHours();
        let minutes = now.getMinutes() + 1;
        return hour + ":" + minutes;
    }

    getCurrentFormattedTime3() {
        let now = new Date();
        let hour = now.getHours();
        let minutes = now.getMinutes() + 2;
        return hour + ":" + minutes;
    }

    start() {
        function checkClock(item) {
            let now = new Date();
            let hour = now.getHours();
            let minutes = now.getMinutes();
            let nowTime = hour + ":" + minutes;
            if(item.time === nowTime) {
                item.callback();
            }
        };
        if(!this.currentTimerId) {
            this.currentTimerId = setInterval(() => {
                for(let item of this.alarmCollection) {
                  checkClock(item);
                }
              }, 1000)
        } 
    }

    stop() {
        if(this.currentTimerId) {
            clearInterval(this.currentTimerId);
            this.currentTimerId = null;
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
    let time = clock.getCurrentFormattedTime();
    let time2 = clock.getCurrentFormattedTime2();
    let time3 = clock.getCurrentFormattedTime3();
    clock.addClock(time, () => console.log('Пора вставать'), 1);
    clock.addClock(time2, () => {console.log('Давай, вставай уже'); clock.removeClock(2)}, 2);
    clock.addClock(time3, () => {
        console.log('Вставай, а то проспишь!');
        clock.clearAlarms();
        clock.printAlarms()
    }, 3);
    clock.printAlarms();
    clock.start();
}

testCase();

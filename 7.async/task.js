class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id){
        let needalarm = this.alarmCollection.find((alarm) => alarm.id === id);
        if(id === undefined){
            throw new Error('Невозможно идентифицировать будильник. Параметр id не передан');
        } else if(needalarm !== undefined){
            console.error("Будильник с таким id уже существует");
            return;
        }
        this.alarmCollection.push({id, time, callback});
    }

    removeClock(id){
        let needalarm = this.alarmCollection.findIndex((alarm) => alarm.id === id);
            if(needalarm !== -1){
                this.alarmCollection.splice(needalarm, 1);
                return true;
            }
        return false;
    }

    getCurrentFormattedTime(){
        let nowTime = new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
            });
        return nowTime;
    }

    start(){
        debugger;
        if(this.timerId !== null){
            return;
        }
        this.timerId = setInterval(() => {
            this.alarmCollection.forEach((alarm) => {
                if(alarm.time === this.getCurrentFormattedTime()){
                console.log(alarm.callback())
                }
            })
            }, 1000);
    } 

    stop(){
        if(this.timerId !== null){
            clearInterval(this.timerId);
            this.timerId = null;
        }
    } 

    printAlarms(){
        console.log(`Печать всех будильников: ${this.alarmCollection.length}`)
        this.alarmCollection.forEach((alarm) => console.log(`Будильник № ${alarm.id} заведен на ${alarm.time}`));
    } 

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    } 
}



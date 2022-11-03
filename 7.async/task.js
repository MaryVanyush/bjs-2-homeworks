class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(value, callback, id){
        let needalarm = this.alarmCollection.find((alarm) => alarm.id === id);
        if(id === undefined){
            throw new Error('Невозможно идентифицировать будильник. Параметр id не передан');
        } else if(needalarm !== undefined){
            console.error("Будильник с таким id уже существует");
            return;
        }
        callback();
        let call = { id: id, value: value,};
        call.callback = callback;
        this.alarmCollection.push(call);
    }

    removeClock(id){
        let needalarm = this.alarmCollection.find((alarm) => alarm.id === id);
        const deleteAlarm = this.alarmCollection.indexOf(needalarm);
            if(deleteAlarm !== -1){
                this.alarmCollection.splice(deleteAlarm, 1);
                return "Будильник удален"
            }
        return "Будильник с таким id не существует";
    }

    getCurrentFormattedTime(){
        let date = new Date;
        return `${date.getHours()}:${date.getMinutes()}`;
    }

    start(){
        // function checkClock (call){
        //     const callTime = this.alarmCollection.find((alarm) => alarm.id === call);
        //     if (getCurrentFormattedTime() === callTime.value) {
        //         callTime.callback();
        //     }
        // }

        // if (this.timerId === null){
        //     const interval = () => setTimeout(() => {
        //         this.alarmCollection.find((alarm) => alarm.checkClock())
        //     }, 0);

        //     this.timerId.interval = interval;
        // }


    //     - запускает все звонки
    //     Создайте функцию проверки (checkClock), которая принимает звонок и проверяет: если текущее время совпадает со временем звонка, то вызывайте колбек.
    //     Если значение идентификатора текущего таймера отсутствует, то создайте новый интервал.
    //     В этом интервале реализуйте функцию, которая будет перебирать все звонки, и для каждого вызывать функцию checkClock.
    //     Результат функции setInterval сохраните в свойстве идентификатора текущего таймера.
    } 

    stop(){
        // function clearInterval(){

        //     this.timerId = null
        // }
        
        // if(this.timerId !== null){
        //     clearInterval()
        // }
    // - останавливает выполнение всех звонков
    // Сделайте проверку существования идентификатора текущего таймера.
    // Если у идентификатора текущего таймера есть значение, то вызовите функцию clearInterval для удаления интервала, а так же удалите значение из свойства "идентификатор текущего таймера".
    } 

    printAlarms(){
        console.log(`Печать всех будильников: ${this.alarmCollection.length}`)
        this.alarmCollection.forEach((alarm) => console.log(`Будильник № ${alarm.id} заведен на ${alarm.value}`));
    } 

    clearAlarms(){
        stop();
        this.alarmCollection.splice(0);
    } 
}



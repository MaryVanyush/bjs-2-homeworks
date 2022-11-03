clock = new AlarmClock

clock.addClock('11:11', () => console.log('давай'), 1)
clock.addClock('11:15', () => console.log('Вставай'), 2)
clock.addClock('15:15', () => console.log('Пора'), 3)
clock.addClock('15:30', () => console.log('Пора вставать'), 4)
// clock.addClock('15:15', 3)// "Будильник с таким id уже существует"
// clock.addClock('15:30')// Невозможно идентифицировать будильник. Параметр id не передан


clock.printAlarms()

// clock.clearAlarms()
console.log(clock)

// console.log(clock.removeClock(2)) // "Будильник удален"
// console.log(clock.removeClock(5)) // Будильник с таким id не существует


// console.log(clock)

// console.log(clock.getCurrentFormattedTime())
// clock.printAlarms()
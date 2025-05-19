function fullDay() {
    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const fullDate = new Date();

    let currentMinute = '';
    let currentHour = '';
    let greeting = '';

    if (fullDate.getMinutes() >= 0 && fullDate.getMinutes() <= 9) {
        currentMinute += '0' + fullDate.getMinutes()
    } else {
        currentMinute = fullDate.getMinutes()
    }
    
    if (fullDate.getHours() >= 0 && fullDate.getHours() <= 9) {
        currentHour += '0' + fullDate.getHours()
    } else {
        currentHour = fullDate.getHours()
    }

    if (+currentHour >= 0 && +currentHour < 12) {
        greeting += 'morning'
    } else if (+currentHour >= 12 && +currentHour < 17) {
        greeting += 'afternoon'
    }
    if (+currentHour >= 17 && +currentHour <= 24) {
        greeting += 'evening'
    }

    
    const calendar = [
        {
            currentDay: day[fullDate.getDay()],
            currentMonth: month[fullDate.getMonth()],
            currentYear: fullDate.getFullYear(),
            currentNum: fullDate.getDate(),
            currentHour: currentHour,
            currentMinute: currentMinute,
            greeting: greeting
        }
    ]

    return calendar
}

module.exports = { fullDay }

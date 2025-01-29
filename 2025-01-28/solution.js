function convertTo24HoursFormat(timeArg) {
    const [time, pmam] = timeArg.split(' ')
    let [hours, minutes] = time.split(':')

    if (hours === '12') {
        hours = 0
    }

    if (pmam === 'PM') {
        hours = Number(hours) + 12
    }

    return { hours: hours, minutes: Number(minutes) }
}

function hoursPassed(t1, t2) {
    const time1 = convertTo24HoursFormat(t1)
    const time2 = convertTo24HoursFormat(t2)

    if (time1.hours === time2.hours && time1.minutes === time2.minutes) {
        return 'no time passed'
    }

    let diffHours = time2.hours - time1.hours
    if (diffHours < 0) {
        diffHours += 24
    }

    return `${diffHours} hours`
}

console.log(hoursPassed('3:00 AM', '9:00 AM'))
console.log(hoursPassed('1:00 AM', '3:00 PM'))
console.log(hoursPassed('4:00 PM', '4:00 PM'))
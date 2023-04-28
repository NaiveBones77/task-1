import React, {useEffect, useState} from 'react';


const Timer = (props) => {

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)
    const [time, setTime] = useState(0)


    const setTimer = () => {
        setTime(time + 1)
        setHours(Math.floor(time / 3600))
        setMinutes(Math.floor((time - (hours * 3600)) / 60))
        if (seconds >= 59)
            setSeconds(0)
        else
            setSeconds(time - (hours * 3600) - (minutes * 60))

    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer()
        }, 1000)
        return () => clearInterval(interval)
    })

    const opt = {
        minimumIntegerDigits: 2
    }

    return (
        <div>
            {`${hours.toLocaleString(undefined, opt)}
            :
            ${minutes.toLocaleString(undefined, opt)}
            :
            ${seconds.toLocaleString(undefined, opt)}`}
        </div>
    );
}

export default Timer;
import {  useState } from "react"

export function Timer() {

    const [ seconds, setSeconds ] = useState(0)
    const [ minutes, setMinutes ] = useState(0)
    const [ hours, setHours ] = useState(0)

    startTimer()

    function startTimer(){
        setTimeout(() => {
            setSeconds(seconds + 1)
        }, 1000)
        if(seconds >= 60){
            setSeconds(0)
            setMinutes(minutes + 1)
        }

        if(minutes > 60){
            setHours(hours + 1)
        }
    }

    return (
        <aside className="text-lg font-medium flex gap-1 absolute top-28 sm:top-32 md:top-1/4 right-8 md:right-1/4">
            <span id="hour">{hours < 10 ? `0${hours}` : hours} :</span>
            <span id="minutes">{minutes < 10 ? `0${minutes}` : minutes} :</span>
            <span id="seconds">{seconds < 10 ? `0${seconds}` : seconds}</span>
        </aside>
    )
}
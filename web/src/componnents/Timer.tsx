export function Timer() {
    return (
        <aside className="text-lg font-medium flex gap-1 absolute top-28 sm:top-32 md:top-1/4 right-8 md:right-1/4">
            <span id="hour">00 :</span>
            <span id="minutes">00 :</span>
            <span id="seconds">00</span>
        </aside>
    )
}
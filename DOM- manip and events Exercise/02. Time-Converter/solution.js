function attachEventsListeners() {
    const [daysInput, hoursInput, minutesInput, secondsInput] = document.querySelectorAll('div [type="text"]')
    const buttons = document.querySelectorAll('div [type="button"]')


    function convert(event) {
        let days = 0;
        let hours = 0;
        let minutes = 0;
        let seconds = 0;
        const parent = event.target.parentElement
    }

    buttons.forEach(button => {
        button.addEventListener('click', convert)
    })

}
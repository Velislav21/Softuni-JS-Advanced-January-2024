function encodeAndDecodeMessages() {

    const textAreas = document.querySelectorAll('textarea')

    const buttons = document.querySelectorAll('button');
    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode() {

        let encodedMessage = ''
        const input = textAreas[0].value

        for (let i = 0; i < input.length; i++){
            const curChar = input[i];
            encodedMessage += String.fromCharCode(curChar.charCodeAt() + 1)
        }
        textAreas[1].value = encodedMessage
        textAreas[0].value = ''
    }

    function decode() {
        let decodedMessage = ''
        const encodedMessage = textAreas[1].value

        for (let i = 0; i < encodedMessage.length; i++){
            const curChar = encodedMessage[i];
            decodedMessage += String.fromCharCode(curChar.charCodeAt() - 1)
        }
        textAreas[1].value = decodedMessage
    }
}
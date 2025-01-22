function encodeAndDecodeMessages() {
    const [encodeTextArea, decodeTextArea] = document.querySelectorAll('#main textarea');
    const [encodeBtn, decodeBtn] = document.querySelectorAll('#main button');

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);
    let decryptedMsg = '';

    function encode() {
        encodeTextArea.value
            .split('')
            .map(char => {
                char = String.fromCharCode(char.charCodeAt() + 1)
                decryptedMsg += char
            })
        decodeTextArea.value = decryptedMsg;
        encodeTextArea.value = ''
        decryptedMsg = ''
    }
    function decode() {
        decodeTextArea.value
            .split('')
            .map(char => {
                char = String.fromCharCode(char.charCodeAt() - 1)
                decryptedMsg += char
            })
        decodeTextArea.value = decryptedMsg;
    }
}
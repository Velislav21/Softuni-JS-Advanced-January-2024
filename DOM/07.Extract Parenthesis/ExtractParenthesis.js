function extract(content) {

    const text = document.getElementById(content).textContent;
    const pattern = /\(([^(]+)\)/g;

    const result = [];
    const matches = text.match(pattern)
    for (let match of matches) {
        result.push(match = match.slice(1, match.length - 1))
    }

    return result.join('; ')
}
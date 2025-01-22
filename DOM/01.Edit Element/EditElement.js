function editElement(ref, match, replacer) {

    const content = ref.textContent
    const pattern = new RegExp(match, 'g');
    const edited = content.replace(pattern, replacer)
    
    ref.textContent = edited
}
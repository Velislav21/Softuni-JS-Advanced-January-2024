function extendProrotype(classToExtend) {

    Object.defineProperty(classToExtend, 'species', {
        value: 'Human'
    })
    classToExtend.toSpeciesString = function () { 
        return `I am a ${this.species}. ${this.toString()}>`
    }
}
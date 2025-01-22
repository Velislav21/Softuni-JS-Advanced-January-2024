class BookClub {

    constructor(library) {
        this.library = library;
        this.books = [];
        this.members = [];
    }
    addBook(title, author) {

        let book = this.books.find(currentBook => currentBook.title == title);

        if (!book) {
            this.books.push({
                title,
                author
            });
            return `The book "${title}" by ${author} has been added to ${this.library} library.`
        };
        return `The book "${title}" by ${author} is already in ${this.library} library.`
    }
    addMember(memberName) {
        let member = this.members.find(member => member == memberName);

        if (member) {
            return `Member ${memberName} is already a part of the book club.`
        }
        this.members.push(memberName);
        return `Member ${memberName} has been joined to the book club.`
    }
    assignBookToMember(memberName, bookTitle) {
        let member = this.members.find(member => member == memberName);
        let book = this.books.find(currentBook => currentBook.title == bookTitle);

        if (!member) {
            throw new Error(`Member ${memberName} not found.`)
        }
        if (!book) {
            throw new Error(`Book "${bookTitle}" not found.`)
        }
        let index = this.books.indexOf(book);
        this.books.splice(index, 1);
        return `Member ${memberName} has been assigned the book "${book.title}" by ${book.author}.`
    }
    generateReadingReport() {

        let result = [];

        if (this.members.length == 0) {
            return "No members in the book club."
        };

        if (this.books.length == 0){
            return "No available books in the library."
        };
        result.push(`Available Books in ${this.library} library:`)
        this.books.forEach(book => result.push(`"${book.title}" by ${book.author}`));
        return result.join('\n')
    }
}
let Club = new BookClub('The Bookaholics');
console.log(Club.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(Club.addBook("1984", "George Orwell"));
console.log(Club.addMember("Alice"));
console.log(Club.assignBookToMember('Alice', "To Kill a Mockingbird"))
console.log(Club.generateReadingReport()) 



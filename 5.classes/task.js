class PrintEditionItem {
    constructor (name, releaseDate, pagesCount){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix(){
        this.state = this.state*1.5;
    }
    
    set state(number){
        if (number < 0) {
            this.state = 0;
        } else if (number > 100) {
            this.state = 100;
        } else{
            this._state = number;
        }
        
    }

    get state(){
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor (name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.type = 'magazine'
    }
}

class Book extends PrintEditionItem {
    constructor (author, name, releaseDate, pagesCount){
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = 'book'
    }
}


class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel'
    }
}

class FantasticBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic'
    }
}

class DetectiveBook extends Book {
    constructor (author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective'
    }
}


class Library {
    constructor (name = "", books = []) {
        this.name = name;
        this.books = books;
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    // императивный метод:
    // findBookBy(type, value){
    //     for(let i = 0; i < this.books.length; i++){
    //         if (this.books[i][type] === value){
    //             return this.books[i];
    //         } 
    //     }
    //     return null;
    // }


    findBookBy(type, value){
        let book = this.books.find((book) => book[type] === value);
        return book || null
    }



    // giveBookByName(bookName){
    //     for(let i = 0; i < this.books.length; i++){
    //         if (bookName === this.books[i].name) {
    //             this.books.splice(i, 1);
    //             return this.books[i];
    //         }     
    //     }
    //         return null;
    //     }
        
    // }

    giveBookByName(bookName){
        const needBook = this.findBookBy('name', bookName);
        const book = this.books.indexOf(needBook);
            if(book !== -1){
                this.books.splice(book, 1);
                return needBook
            }
        return null;
    }
}






// задание 3


class Student {
    constructor (name, gender, age){
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.subjects = [];
    }

    setSubject(subjectName){
        this.subjects.push(subjectName);
    }


    addMark(mark, subjectName) {
        if (mark > 5 || mark < 1){
            console.error("Ошибка, оценка должна быть числом от 1 до 5");
            return
        }
        let subject = this.subjects.find((subject) => {
            if(subject.subjectName === subjectName){
                subject.marks.push(mark);
            }
        });
        return subject;
    }

    getAverageBySubject(subjectName) {
        let subject = this.subjects.filter((subject) => subject.subjectName === subjectName);
        if(subject[0].marks.length === 0) {
            return 0;
        }
        let sum = subject[0].marks.reduce((initialmark, mark) => initialmark + mark);
        return Number((sum/subject[0].marks.length).toFixed(2));
    }

    getAverage(){
        let allSubjects = this.subjects.filter((subject) => this.getAverageBySubject(subject.subjectName))
        let sum = 0;
        for(let i = 0; i < allSubjects.length; i++){
            sum += allSubjects[i].marks.reduce((initialmark, mark) => initialmark + mark);
        }
        return sum/allSubjects.length
}
    
    exclude(reason) {
        delete this.subjects;
        this.excluded = reason;
    }
}

class Subject {
    constructor (subjectName = "", marks = []) {
        this.subjectName = subjectName;
        this.marks = marks;
    }
}



class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(value) {
        if (value < 0) {
            this._state = 0;
        } else if (value > 100) {
            this._state = 100;
        } else {
            this._state = value;
        }

    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super (name, releaseDate, pagesCount);
        this.author = author;
        this.state = 100;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super (author, name, releaseDate, pagesCount);
        this.state = 100;
        this.type = "detective";
    }
}

class Library {
    constructor (name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book); 
        } else {
            console.log("Книга скоро рассыпется:( надо подлечить")
        }
    }

    findBookBy(prop, value) {
        for (let item of this.books) {
            if (value === item[prop]) {
                return item;
            } 
        }

        return null;
    }

    
    giveBookByName(bookName) {
        for (let item of this.books) {
            if (bookName === item.name) {
                this.books.splice(item.indexOf, 1);
                return item;
            } 
        }

        return null;
    }
}


class StudentLog {
    constructor (name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    addGrade(mark, subject) {
        if(mark <= 5 && mark > 0) {
            if (this.marks === undefined) {
                this.marks = {};
                if (this.marks[subject] === undefined) {
                    this.marks[subject] = [mark];
                } else {
                    this.marks[subject].push(mark);
                }
            } else {
                if (this.marks[subject] === undefined) {
                    this.marks[subject] = [mark];
                } else {
                    this.marks[subject].push(mark);
                }
            }
        } else {
            console.log('Ошибка, оценка должна быть числом от 1 до 5');
        }
    }  
    
    getAverageBySubject(subject) {
        if (this.marks[subject] === undefined) {
            console.log('Несуществующий предмет')
        } else {
            let total = 0;
    
            for(let i = 0; i < this.marks[subject].length; i++) {
                total += this.marks[subject][i];
            }
                
            console.log(`Средний балл по предмету ${subject}: ` + (total / this.marks[subject].length));
            return total / this.marks[subject].length;
        }
    }

    getTotalAverage() {
        if(Object.keys(this.marks).length === 0) {
            console.log('Ошибка, отсутствуют оценки для расчета');
        } else {
            let total = 0;
            let count = 0;
            for (let item in this.marks) {
                total += this.getAverageBySubject(item);
                count += 1;
            }

            console.log("Средний балл по всем предметам: " + total / count);
            return total / count;
        }
    }

    exclude(reason) {
        delete this.marks;
        this.excluded = reason;
    }
}
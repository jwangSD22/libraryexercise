
let myLibrary = [];

class Book {
    constructor(title,author,pages,read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = read;
    }
}

Book.prototype.textMaker = function (){
    return `<b>${this.title}</b> written by ${this.author} contains ${this.pages} pages. Status:${this.readStatus}.`
    }


const book1 = new Book('Easy Spanish step-by-step',`Barbara Bregstein`,303,'read');
const book2 = new Book('TED talks','Chris Anderson',269,'not read');
const book3 = new Book('Japanese soul cooking',"Tadashi Ono",245,'read')
const book4 = new Book('Harry potter','jk rowling',500,'read');

myLibrary.push(book1,book2,book3,book4)


function addBooktoLibrary(){
    for (let i=0;i<myLibrary.length;i++)
cardMaker.append(myLibrary[i])
}


let z = function(){    

    for (let i=0;i<myLibrary.length;i++){
        let y = document.createElement('div');
        document.body.appendChild(y)
        let x = document.querySelectorAll('div');
        x[i].textContent=myLibrary[i].textMaker()
    }
}





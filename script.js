const bookContainer = document.getElementById("bookContainer");

let myLibrary = [];

class Book {
    constructor(title,author,readStatus,hiddenID){
        this.title = title;
        this.author = author;
        this.readStatus = readStatus;
        this.hiddenID = hiddenID
    }
}

function bookMaker(x,y,z){
    let newBook = new Book(x,y,z)
    myLibrary.push(newBook);
}

Book.prototype.textMaker = function (){
    return `${this.title} written by ${this.author} contains ${this.pages} pages. Status:${this.readStatus}.`
    }

Book.prototype.deleteBook = function(){
console.log(this);
console.log(myLibrary.indexOf(this))
myLibrary.splice(myLibrary.indexOf(this),1)
}

Book.prototype.changeStatus = function(){
    if(this.readStatus === 'Read'){
        this.readStatus = 'Unread'
    }
    else {this.readStatus = 'Read'}
}



const book1 = new Book('Easy Spanish step-by-step',`Barbara Bregstein`,'Read',123456);
const book2 = new Book('TED talks','Chris Anderson','Unread',124678);
const book3 = new Book('Japanese soul cooking',"Tadashi Ono",'Read',154754)
const book4 = new Book('Harry potter','jk rowling','Read',125464);

myLibrary.push(book1,book2,book3,book4)



let z = function(){    

    for (let i=0;i<myLibrary.length;i++){
        let y = document.createElement('div');
        y.classList.add('bookInList');
        bookContainer.appendChild(y)
        let x = document.querySelectorAll('div.bookInList');
        x[i].textContent=myLibrary[i].textMaker()
    }
}


document.getElementById('submitBook').onclick = function() {
    var radios = document.getElementsByName('readStatus');
    let readStatus
    for (let radio of radios)
    {
        if (radio.checked) {
            readStatus = radio.value;
        }
    }
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;

    bookMaker(title,author,readStatus);
    document.getElementById('title').value=''
    document.getElementById('author').value= '';
    }







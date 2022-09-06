const bookContainer = document.getElementById("bookContainer");
const buttonGrabber = document.getElementsByClassName('buttonDiv')

let myLibrary = [];

class Book {
    constructor(title,author,readStatus,hiddenID){
        this.title = title;
        this.author = author;
        this.readStatus = readStatus;
        this.hiddenID = hiddenID
    }
}

function bookMaker(x,y,z,i){
    let newBook = new Book(x,y,z,i)
    myLibrary.push(newBook);
    return newBook
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




const book1 = new Book('Easy Spanish step-by-step',`Barbara Bregstein`,'Read','123456');
const book2 = new Book('TED talks','Chris Anderson','Unread','124678');
const book3 = new Book('Japanese soul cooking',"Tadashi Ono",'Read','154754')
const book4 = new Book('Harry potter','jk rowling','Read','125464');

myLibrary.push(book1,book2,book3,book4)
pushBook();


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
    //random 6 digit Index number generator
    let num = Math.random().toString();
    let newIndex = num.slice(2,8);

    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    bookMaker(title,author,readStatus,newIndex);
    document.getElementById('title').value=''
    document.getElementById('author').value= '';
    pushBook()
    }


//function that pushes the whole array to list
function pushBook(){
while(bookContainer.firstChild){
    bookContainer.removeChild(bookContainer.firstChild);
}

for(let i=0;i<myLibrary.length;i++){

var x = document.createElement("BUTTON");
var t = document.createTextNode("✓");
var no = document.createTextNode("⨯");
x.setAttribute('hiddenID',myLibrary[i].hiddenID);
x.setAttribute('hiddenID',myLibrary[i].hiddenID);
x.setAttribute('id','readStatusButton');

if(myLibrary[i].readStatus === 'Read'){
    x.appendChild(t)
}
else{x.appendChild(no)}


var y = document.createElement("BUTTON");
var z = document.createTextNode("DELETE");
y.setAttribute('hiddenID',myLibrary[i].hiddenID);
y.setAttribute('id','listDeleteButton');
y.appendChild(z);

let divMaker1 = document.createElement('div')
let divMaker2 = document.createElement('div')
let divMaker3 = document.createElement('div')
let divMaker4 = document.createElement('div')

divMaker1.setAttribute('hiddenID',myLibrary[i].hiddenID);
divMaker2.setAttribute('hiddenID',myLibrary[i].hiddenID);
divMaker3.setAttribute('hiddenID',myLibrary[i].hiddenID);
divMaker3.setAttribute('class','buttonDiv');
divMaker3.setAttribute('onclick','buttonStatusChanger(this)');
divMaker3.setAttribute('hiddenID',myLibrary[i].hiddenID);
divMaker4.setAttribute('hiddenID',myLibrary[i].hiddenID);
divMaker4.setAttribute('onclick','buttonDeleteBook(this)');

divMaker1.textContent = myLibrary[i].title
divMaker2.textContent = myLibrary[i].author
divMaker3.textContent = myLibrary[i].readStatus + '   '
divMaker3.appendChild(x);
divMaker4.appendChild(y);

bookContainer.appendChild(divMaker1)
bookContainer.appendChild(divMaker2)
bookContainer.appendChild(divMaker3)
bookContainer.appendChild(divMaker4)
}
}



function buttonStatusChanger(x){
    let id = x.getAttribute('hiddenID')
    let index = myLibrary.findIndex(item=>item.hiddenID===id);
    myLibrary[index].changeStatus();
    pushBook();
    }

function buttonDeleteBook(x){
    let id = x.getAttribute('hiddenID');
    let index = myLibrary.findIndex(item=>item.hiddenID===id);
    myLibrary[index].deleteBook();
    pushBook();
    }

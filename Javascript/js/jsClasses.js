class Book{
    bookId;bookName;bookPrice //instance variable

    constructor(id=0,name="",price=0){
        this.bookId =id;
        this.bookName =name;
        this.bookPrice=price;
    }
//instance method
    getDiscountPrice(){
        return this.bookPrice = this.bookPrice*0.1;
    }

    increasePrice(){
        return this.bookPrice = this.bookPrice+100;
    }
}
// 1. Iterate book array
// 2. find books related to Java / java
// 3. find book having id 4
// 4. increase price of every book by 100
// 5. display sum of prices of all books
let books =[
    new Book(1, "javatech",560),
    new Book(2, "java easy way",450),
    new Book(3, "learn",400),
    new Book(4, "learn java",400),
    new Book()
]

console.log(books);
//iterate
books.forEach(ele=>console.log("books",ele));
//find book

books.filter((book) => book.bookName.includes("java")).forEach(ele=>console.log(ele));
const book4= books.filter((book) => book.bookId === 4)
console.log("book4",book4)

//sum
const Price = books.map((book) => book.bookPrice);
console.log(Price)

const bookPriceSum = Price.reduce((acc,price) => acc + price );
console.log(bookPriceSum);

//increase price

books.forEach((book) => console.log(book.increasePrice()))

console.log()

// books.forEach(book=>console.log(book.getDiscountPrice()))
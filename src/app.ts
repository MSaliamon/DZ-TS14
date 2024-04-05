class Book {
    private title: string;
    private author: string;
    private genre: string;

    constructor(title: string, author: string, genre: string) {
        this.title = title;
        this.author = author;
        this.genre = genre;
    }

    getDetails(): string {
        return `${this.title} by ${this.author}, Genre: ${this.genre}`;
    }
}

class Library {
    private books: Book[];

    constructor() {
        this.books = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    displayBooks(): void {
        this.books.forEach(book => console.log(book.getDetails()));
    }
}

class User {
    private name: string;
    private email: string;

    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }

    getUserInfo(): string {
        return `Name: ${this.name}, Email: ${this.email}`;
    }
}

// Example Usage
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Fiction");
const book2 = new Book("1984", "George Orwell", "Dystopian");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.displayBooks();

const user = new User("John Doe", "john@example.com");
console.log(user.getUserInfo());

// 2



interface Shape {
    draw(): void;
}

class Circle implements Shape {
    draw(): void {
        console.log("Drawing a circle");
    }
}

class Rectangle implements Shape {
    draw(): void {
        console.log("Drawing a rectangle");
    }
}

// New shape: Ellipse
class Ellipse implements Shape {
    draw(): void {
        console.log("Drawing an ellipse");
    }
}

// Example Usage
const shapes: Shape[] = [];
shapes.push(new Circle());
shapes.push(new Rectangle());
shapes.push(new Ellipse()); // Adding a new shape without modifying existing code

shapes.forEach(shape => shape.draw());

//3 

abstract class Shape2 {
    abstract area(): number;
}

class Square extends Shape2 {
    private side: number;

    constructor(side: number) {
        super();
        this.side = side;
    }

    area(): number {
        return this.side * this.side;
    }
}

class Circle2 extends Shape2 {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

// Example Usage
function calculateArea(shape: Shape2): void {
    console.log(`Area: ${shape.area()}`);
}

const square = new Square(5);
const circle = new Circle2(3);

calculateArea(square);
calculateArea(circle);

//4
interface TaskAssignable {
    assignTask(): void;
}

interface TaskCreatable {
    createTask(): void;
}

interface TaskCompletable {
    completeTask(): void;
}

class Developer implements TaskAssignable, TaskCompletable {
    assignTask(): void {
        console.log("Task assigned to developer");
    }

    completeTask(): void {
        console.log("Developer completed task");
    }
}

class Manager implements TaskAssignable, TaskCreatable {
    assignTask(): void {
        console.log("Task assigned by manager");
    }

    createTask(): void {
        console.log("Task created by manager");
    }
}

// Example Usage
const developer = new Developer();
const manager = new Manager();

developer.assignTask();
developer.completeTask();

manager.assignTask();
manager.createTask();


//5
interface MessageSender {
    sendMessage(message: string): void;
}

class EmailSender implements MessageSender {
    sendMessage(message: string): void {
        console.log(`Sending email: ${message}`);
    }
}

class SMSsender implements MessageSender {
    sendMessage(message: string): void {
        console.log(`Sending SMS: ${message}`);
    }
}

class MessageService {
    private sender: MessageSender;

    constructor(sender: MessageSender) {
        this.sender = sender;
    }

    sendNotification(message: string): void {
        this.sender.sendMessage(message);
    }
}

// Example Usage
const emailSender = new EmailSender();
const smsSender = new SMSsender();

const emailService = new MessageService(emailSender);
const smsService = new MessageService(smsSender);

emailService.sendNotification("Hello via Email");
smsService.sendNotification("Hello via SMS");



const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

function readingList(books) {
  // accessing DOM
  const contentEle = document.querySelector("#content");

  books.forEach((book) => {
    // creating ul ele
    const createBookLstUl = document.createElement("ul");
    // creating li eles
    const createLiElements = document.createElement("li");
    // creating p
    const booksDetails = document.createElement("p");
    // crteating img tag
    const imgEle = document.createElement("img");

    /*adding text, image */
    //  adding image int0 imgElement
    imgEle.setAttribute("src", `${book.bookCoverImage}`);
    // adding text into p tag
    booksDetails.textContent = `${book.title} by ${book.author}`;
    //  changing the color of bg
    {
      if (book.alreadyRead === true) {
        createLiElements.style.backgroundColor = "green";
      } else {
        createLiElements.style.backgroundColor = "red";
      }
    }

    /*appending child */
    // appending p tag tag inside li eles
    createLiElements.appendChild(booksDetails);
    createLiElements.appendChild(imgEle);
    // appening li child inside ul ele
    createBookLstUl.appendChild(createLiElements);
    // appending ul ele inside conetent
    contentEle.appendChild(createBookLstUl);
  });
}

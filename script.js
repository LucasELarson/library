/* eslint-disable no-unused-vars */
const library = [];

let count = 0;

class Book {
   constructor(title, author, pages, isread, bookid) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.isread = isread;
      this.bookid = bookid;
   }
}

function addBook() {
   const $author = document.getElementById("Author").value;
   const $title = document.getElementById("Title").value;
   const $pages = document.getElementById("Pages").value;
   const $isread = document.getElementById("IsRead").checked;
   const bookID = "newBook" + count;
   const newBook = new Book($title, $author, $pages, $isread, bookID);

   // assigns each book an id for the array and adds it to the array //

   library.push(newBook);

   // creates div and assigns it a class based on how many divs there are //
   const divdiv = document.createElement("div");
   const idName = "A" + count;
   divdiv.setAttribute("id", idName);

   // creates the title in the div //
   const divtitle = document.createElement("h5");
   divtitle.innerHTML = $title;
   divdiv.appendChild(divtitle);

   // adds author to the div //
   const divauthor = document.createElement("p");
   divauthor.innerHTML = $author;
   divdiv.appendChild(divauthor);

   // adds book length to the div //
   const divpages = document.createElement("p");
   divpages.innerHTML = $pages;
   divdiv.appendChild(divpages);

   // says whether or not the book is read, toggleable //
   const divisread = document.createElement("p");
   divisread.innerHTML = "Read: " + $isread;
   const idRead = "B" + count;
   divisread.setAttribute("id", idRead);
   divisread.addEventListener("click", function () {
      if (document.getElementById(idRead).innerText.includes("false")) {
         document.getElementById(idRead).innerText = "Read: true";
      } else {
         document.getElementById(idRead).innerText = "Read: false";
      }
   });
   divdiv.appendChild(divisread);

   // creates a button to remove div entirely //
   const removebutton = document.createElement("button");
   removebutton.innerText = "Remove Book";
   removebutton.addEventListener("click", function () {
      for (let i = 0; i <= library.length; i++) {
         if (library[i].bookid === bookID) {
            library.slice(i, 1);
            document.getElementById(idName).remove();
         }
      }
   });
   divdiv.appendChild(removebutton);
   count = count + 1;
   // adds the div to the page //
   document.getElementById("books").appendChild(divdiv);
   console.log(document.getElementById(idRead).innerText);
}

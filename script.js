// heyy there :) 🍓

let myLibrary = [
  {
    title: "1984",
    author: "George Orwell",
    pages: 328,
    genre: "Dystopian",
    seen: "Assets/unseen.png",
    del: false
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281,
    genre: "Classic",
    seen: "Assets/unseen.png",
    del: false
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    pages: 310,
    genre: "Fantasy",
    seen: "Assets/unseen.png",
    del: false
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    pages: 279,
    genre: "Romance",
    seen: "Assets/unseen.png",
    del: false
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    pages: 208,
    genre: "Adventure",
    seen: "Assets/unseen.png",
    del: false
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    pages: 443,
    genre: "History",
    seen: "Assets/unseen.png",
    del: false
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    pages: 214,
    genre: "Coming-of-Age",
    seen: "Assets/unseen.png",
    del: false
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    pages: 635,
    genre: "Adventure",
    seen: "Assets/unseen.png",
    del: false
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    pages: 280,
    genre: "Horror",
    seen: "Assets/unseen.png",
    del: false
  },
  {
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    pages: 96,
    genre: "Fable",
    seen: "Assets/unseen.png",
    del: false
  }
];

// 🧾 Render book table
function Book() {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";

  for (let i = myLibrary.length - 1; i >= 0; i--) {
    const book = myLibrary[i];
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.genre}</td>
      <td><img src="${book.seen}" onclick="seen_status(${i})" style="width: 20px; cursor: pointer;"></td>
      <td><button onclick="deleteRow(${i})">❌</button></td>
    `;

    if (i % 2 === 0) row.style.background = "rgb(233, 217, 217)";
    tbody.appendChild(row);
  }
}

// 👁️ Toggle seen/unseen image
function seen_status(i) {
  myLibrary[i].seen = myLibrary[i].seen === "Assets/unseen.png"
    ? "Assets/seen.png"
    : "Assets/unseen.png";
  Book();
}

// ❌ Delete book
function deleteRow(i) {
  myLibrary.splice(i, 1);
  Book();
}

// ➕ Add book from form
function addBookToLibrary() {
  const dialog = document.querySelector("dialog");
  const addBookBtn = document.querySelector("#addBook");
  const addbtn = document.querySelector("#addbtn");
  const bkg = document.querySelector(".back");
  const closeDialog = document.querySelector("#closeDialog");

  let title = document.getElementById("title");
  let author = document.getElementById("author");
  let pages = document.getElementById("pageNum");
  let genre_list = document.getElementById("genre-list");

  addBookBtn.addEventListener("click", () => {
    dialog.show();
    bkg.style.display = "inline";
    title.value = "";
    author.value = "";
    pages.value = "";
  });

  // Make sure the click listener is added only once
  addbtn.addEventListener("click", () => {
    if (title.value === "" || author.value === "" || pages.value === "") {
      alert("Please, fill All Inputs");
    } else {
      const newBook = {
        title: title.value,
        author: author.value,
        pages: pages.value,
        genre: genre_list.value,
        seen: "Assets/unseen.png",
        del: false
      };

      myLibrary.push(newBook);
      dialog.close();
      bkg.style.display = "none";
      Book();
    }
  });
  closeDialog.addEventListener('click',()=>{
    dialog.close();
    bkg.style.display = "none";

  })
}

// Initial render
Book();
addBookToLibrary();

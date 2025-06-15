// heyy there :) 

let count=0;


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
  


function Book() {

    let tbody = document.querySelector('tbody');
    tbody.innerHTML='';
     
    for(let i=myLibrary.length-1 ; i>=0 ; i--){
     let row = document.createElement('tr');
      
        row.innerHTML=`
        <td>${myLibrary[i].title}</td>
        <td>${myLibrary[i].author}</td>
        <td>${myLibrary[i].pages}</td>
        <td>${myLibrary[i].genre}</td>
        <td><img src="${myLibrary[i].seen}" onclick="seen_status(${i})"></td>
        <td><button onclick="deleteRow(${i})">❌</button></td>
        `;
        tbody.appendChild(row)
        if(i % 2 === 0){
            row.style.background="rgb(233, 217, 217)";
         }
        

     }
    
}
function seen_status(i){
        myLibrary[i].seen = myLibrary[i].seen=== "Assets/unseen.png" 
        ? "Assets/seen.png"
        : "Assets/unseen.png";
    Book();

}

function deleteRow(btn) {
    myLibrary.splice(btn, 1);
    Book();
}
function addBookToLibrary() {

    const dialog = document.querySelector('dialog');
    const addBook= document.querySelector('#addBook');

    const bkg = document.querySelector('.back');
    


    addBook.addEventListener('click', ()=>{
     const title = document.getElementById('title');
     const author = document.getElementById('author');
     const pages = document.getElementById('pageNum');
     const genre_list = document.getElementById('genre-list');
        dialog.show();
         title.value =''
         author.value =''
         pages.value =''


       const addbtn = document.querySelector('#addbtn');
       bkg.style.display="inline"
       addbtn.addEventListener('click',()=>{

        if(title.value === '' || author.value === '' ||pages.value ===''){
            alert("Please , fill All Inputs")
        }else{
        let newBook = { title: title.value,
                        author: author.value , 
                        pages: pages.value ,
                        genre: genre_list.value ,
                        seen: "Assets/unseen.png"
                    };
        myLibrary.push(newBook);

        dialog.close();
        bkg.style.display="none"
        Book();
        console.log( myLibrary);}
       })
        
    }) 
   console.log( myLibrary);


  }
Book();
addBookToLibrary();

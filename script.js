

function init(){
    loadFromLocalStorage();
    showBookContent();
  }

  function showBookContent(){
    let bookContent = document.getElementById('book_content');
    for (let bookIndex = 0; bookIndex < books.length; bookIndex++) {
      bookContent.innerHTML += bookContentTemplate(bookIndex);
      let likeBtn = document.getElementById('heart_img'+bookIndex);
      if(books[bookIndex].liked == true){
        likeBtn.innerHTML = showGreenHeart(bookIndex);
      }
      else{
        likeBtn.innerHTML = showBlankHeart(bookIndex);
      }
      showComments(bookIndex);
      saveToLocalStorage();
    }
  }

  function showComments(bookIndex){
    let comments = document.getElementById('comment'+bookIndex);
    comments.innerHTML= '';
    for (let commentIndex = 0; commentIndex < books[bookIndex].comments.length; commentIndex++) {
         comments.innerHTML += showCommentsTemplate(bookIndex, commentIndex);
      
    }

  }

function addComment(bookIndex){
  let commentInput = document.getElementById('input_field'+bookIndex);
  let newComment = {
      "name": "Maria",
      "comment": commentInput.value
      };
  books[bookIndex].comments.push(newComment);
  showComments(bookIndex);
  commentInput.value = '';
  saveToLocalStorage();
  
}

function pressLikeBtn(bookIndex){
  let likeBtn = document.getElementById('heart_img'+bookIndex);
  let countLikes = document.getElementById('count_likes'+ bookIndex);
  if(books[bookIndex].liked==true){
    books[bookIndex].liked = false;
    likeBtn.innerHTML = "";
    likeBtn.innerHTML = showBlankHeart(bookIndex);
    books[bookIndex].likes -= 1;
    countLikes.innerHTML= "";
    countLikes.innerHTML= books[bookIndex].likes;
    saveToLocalStorage();


    
  }
    else{
      books[bookIndex].liked = true;
      likeBtn.innerHTML = "";
      likeBtn.innerHTML = showGreenHeart(bookIndex);
      books[bookIndex].likes += 1;
      countLikes.innerHTML = "";
      countLikes.innerHTML = books[bookIndex].likes;
      saveToLocalStorage();

    }
  }

  function saveToLocalStorage(){
    localStorage.setItem("books", JSON.stringify(books));
  }

  function loadFromLocalStorage(){
    let booksArray = JSON.parse(localStorage.getItem("books"));
    if(booksArray == null){
        booksArray = books;
    }
    else{
      books = booksArray;
    }

  }
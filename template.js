function bookContentTemplate(bookIndex){
    return `
        <section class="book_style">
            <h1>${books[bookIndex].name}</h1>
            <img id="book_img${bookIndex}" class="book_picture" src="./assets/book.png" alt="Book" />
            <div id="price_and_likes">
                <p id="price">${books[bookIndex].price.toFixed(2)}€</p>
                <div id="likes">
                    <p id="count_likes${bookIndex}">${books[bookIndex].likes}</p>
                    <div id="heart_img${bookIndex}">
                    </div>
                </div>
            </div>
            <table id="book_information">
                <tr>
                    <td class="td_left">Autor</td>
                    <td>${books[bookIndex].author}</td>
                </tr>
                <tr>
                    <td class="td_left">Erscheinungsjahr</td>
                    <td>${books[bookIndex].publishedYear}</td>
                </tr>
                <tr>
                    <td class="td_left">Genre</td>
                    <td>${books[bookIndex].genre}</td>
                </tr>
                </table>
            <div id="comment_area">
                <h3>Kommentare:</h3>
                <div class="comment_table">
                    <table id="comment${bookIndex}">  
                    </table>
                </div>
                <div class ="input_area">
                    <input class="input_style" id="input_field${bookIndex}" type="text" placeholder="Schreibe deinen Kommentar..." />
                    <img onclick= "addComment(${bookIndex})" id="send_icon" src="./assets/icons8-gesendet-50.png" alt="Senden">
                </div>
            </div>
    </section>        
    `
}

function showCommentsTemplate(bookIndex, commentIndex){
    return `
        <tr>
            <td class="td_left">${books[bookIndex].comments[commentIndex].name}</td>
            <td >${books[bookIndex].comments[commentIndex].comment}</td>
        </tr>    
    `

}

function showGreenHeart(bookIndex){
    return `<img class="heart" onclick="pressLikeBtn(${bookIndex})" src="./assets/icons8-green-heart-94.png" alt="heart"/>`
}

function showBlankHeart(bookIndex){
    return `<img class="blank_heart" onclick="pressLikeBtn(${bookIndex})"src="./assets/icons8-gefällt-mir-100.png" alt="Gefällt mir">`
}
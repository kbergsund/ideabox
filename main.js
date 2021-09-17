// var Idea = require("./Idea.js")

var ideaCards = [];

// querySelectors
var saveButton = document.querySelector('#js-save');
var titleInput = document.querySelector('#title-input')
var bodyInput = document.querySelector('#body-input')
var cardSection = document.querySelector('#js-card-section')

// Event Listeners
saveButton.addEventListener('click', saveToCard);

// function render(title, body) {
// currentIdea = new Idea({ title: title, body: body })
// // console.log(currentIdea);
// ideaCards.push(currentIdea);
// }

function saveToCard() {
    // console.log('hey')
    cardSection.innerHTML =
    `<article class = 'idea-card'>
    <div class = "card-top">
      <img src="./assets/star.svg">
      <img src="./assets/delete.svg">
    </div>
      <h4>Basic Card Title lol</h4>
      <p>Idea body. Don't ever play yourself. Every chance I get, I water the plants, Lion! Cloth talk. </p>
    <div class = "card-bottom">
      <img src="./assets/comment.svg" class = "comment-image">
      <p>Comment</p>
    </div>
  </article>`
}

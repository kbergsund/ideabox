// var Idea = require("./Idea.js")

var ideaCards = [];

// querySelectors
var saveButton = document.querySelector('#js-save');
var titleInput = document.querySelector('#title-input')
var bodyInput = document.querySelector('#body-input')
var cardSection = document.querySelector('#js-card-section')

// Event Listeners
saveButton.addEventListener('click', saveToCard);
titleInput.addEventListener('input', enableSaveButton);
bodyInput.addEventListener('input', enableSaveButton);


function render(title, body) {
var newIdea = new Idea({ title: title, body: body })
ideaCards.push(newIdea);
}

function saveToCard() {
    render(titleInput.value, bodyInput.value)
    cardSection.innerHTML +=
    `<article class = 'idea-card'>
    <div class = "card-top">
      <img src="./assets/star.svg">
      <img src="./assets/delete.svg">
    </div>
      <h4>${titleInput.value}</h4>
      <p>${bodyInput.value}</p>
    <div class = "card-bottom">
      <img src="./assets/comment.svg" class = "comment-image">
      <p>Comment</p>
    </div>
  </article>`
  console.log(ideaCards)
  clearInputs();
  disableSaveButton();
}

function enableSaveButton(){
    saveButton.disabled = false;
    saveButton.classList.add('enabled-button')
  }

function disableSaveButton(){
  saveButton.disabled = true;
}

function clearInputs(){
  titleInput.value = '';
  bodyInput.value = '';
}

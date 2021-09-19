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
cardSection.addEventListener('click', deleteCard);

function render(title, body) {
var newIdea = new Idea({ title: title, body: body })
ideaCards.push(newIdea);
}

function enableSaveButton(){
  saveButton.disabled = false;
  saveButton.classList.add('enabled');
}

function disableSaveButton(){
  saveButton.disabled = true;
  saveButton.classList.remove('enabled')
}

function clearInputs(){
  titleInput.value = '';
  bodyInput.value = '';
}

function saveToCard() {
    render(titleInput.value, bodyInput.value)
    cardSection.innerHTML +=
    `<article class = 'idea-card'>
    <div class = "card-top">
      <img src="./assets/star.svg">
      <img class="delete-img" src="./assets/delete.svg">
    </div>
      <h3>${titleInput.value}</h3>
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

function deleteCard() {
  if (event.target.classList.contains('delete-img')) {
    var parentCard = event.target.closest('article');
    parentCard.classList.add('hidden');
  }
  removeIdea(parentCard);
}

function removeIdea(parentCard) {
  for (var i = 0; i < ideaCards.length; i++) {
    var cardTitle = parentCard.childNodes[3].innerText;
    if (cardTitle === ideaCards[i].title) {
      ideaCards.splice(i, 1);
    }
  }
}

function deleteCard() {
  if (event.target.classList.contains('delete-img')) {
    console.log('you clicked the X button');
    event.target.parentNode.parentNode.classList.add('hidden');
  }
  removeIdea();
}

function removeIdea(){
  for (var i = 0; i < ideaCards.length; i++){
    if (event.target.parentNode.parentNode.childNodes[3].innerText === ideaCards[i].title){
      ideaCards.splice(i, 1);
      console.log(ideaCards);
    }
  }
}

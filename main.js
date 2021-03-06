// Query Selectors
var saveButton = document.querySelector('#saveButton');
var titleInput = document.querySelector('#titleInput');
var bodyInput = document.querySelector('#bodyInput');
var cardSection = document.querySelector('#cardSection');
var showStarredButton = document.querySelector('#showStarred');

// Event Listeners
window.addEventListener('load', refreshPage);
saveButton.addEventListener('click', saveToCard);
titleInput.addEventListener('input', enableSaveButton);
bodyInput.addEventListener('input', enableSaveButton);
cardSection.addEventListener('click', deleteCard);
cardSection.addEventListener('click', clickStar);

// Global Variables
var ideaCards = [];

// Functions & Event Handlers
function render(title, body) {
  var newIdea = new Idea({
    title: title,
    body: body
  })
  newIdea.saveToStorage();
}

function loadDOM() {
  cardSection.innerHTML = '';
  for (var i = 0; i < ideaCards.length; i++) {
    if (ideaCards[i].star) {
      var imgSrc = "./assets/star-active.svg";
    } else {
      var imgSrc = "./assets/star.svg";
    }
    cardSection.innerHTML +=
      `<article class = 'idea-card'>
        <div class = "card-top">
          <img class="star-img" id="clearStar" src=${imgSrc}>
          <img class="delete-img" src="./assets/delete.svg">
        </div>
          <h3>${ideaCards[i].title}</h3>
          <p>${ideaCards[i].body}</p>
        <div class = "card-bottom">
          <img src="./assets/comment.svg" class = "comment-image">
          <p>Comment</p>
        </div>
      </article>`
  }
}

function refreshPage() {
  for (var i = 0; i < localStorage.length; i++) {
    var objectToGet = localStorage.key(i);
    var objectToParse = localStorage.getItem(objectToGet);
    var parsedObject = JSON.parse(objectToParse);
    var ideaInstance = new Idea(parsedObject);
    ideaCards.push(ideaInstance);
  }
  loadDOM();
}

function enableSaveButton() {
  saveButton.disabled = false;
  saveButton.classList.add('enabled');
}

function disableSaveButton() {
  saveButton.disabled = true;
  saveButton.classList.remove('enabled');
}

function clearInputs() {
  titleInput.value = '';
  bodyInput.value = '';
}

function saveToCard() {
  render(titleInput.value, bodyInput.value);
  loadDOM();
  clearInputs();
  disableSaveButton();
}

function deleteCard() {
  if (event.target.classList.contains('delete-img')) {
    var parentCard = event.target.closest('article');
    var cardTitle = parentCard.childNodes[3].innerText;
    for (var i = 0; i < ideaCards.length; i++) {
      if (cardTitle === ideaCards[i].title) {
        ideaCards[i].deleteFromStorage(parentCard, i);
      }
    }
    parentCard.classList.add('hidden');
  }
}

function clickStar() {
  for (var i = 0; i < ideaCards.length; i++) {
    if (event.target.classList.contains('star-img')) {
      var parentCard = event.target.closest('article');
      var cardTitle = parentCard.childNodes[3].innerText;
      if (cardTitle === ideaCards[i].title && !ideaCards[i].star) {
        var ideaInstance = new Idea(ideaCards[i]);
        ideaInstance.updateIdea();
        orangeStar(parentCard);
      } else if (cardTitle === ideaCards[i].title && ideaCards[i].star) {
        var ideaInstance = new Idea(ideaCards[i]);
        ideaInstance.updateIdea();
        whiteStar(parentCard);
      }
    }
  }
}

function orangeStar(parentCard) {
  var starImage = parentCard.childNodes[1].childNodes[1];
  starImage.src = "./assets/star-active.svg";
}

function whiteStar(parentCard) {
  var starImage = parentCard.childNodes[1].childNodes[1];
  starImage.src = "./assets/star.svg"
}
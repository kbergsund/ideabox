// var Idea = require("./Idea.js")

var ideaCards = [];

// querySelectors
var saveButton = document.querySelector('#js-save');
var titleInput = document.querySelector('#title-input');
var bodyInput = document.querySelector('#body-input');
var cardSection = document.querySelector('#js-card-section');
var showStarredButton = document.querySelector('#show-starred');

// Event Listeners
saveButton.addEventListener('click', saveToCard);
titleInput.addEventListener('input', enableSaveButton);
bodyInput.addEventListener('input', enableSaveButton);
cardSection.addEventListener('click', deleteCard);
cardSection.addEventListener('click', clickStar);
showStarredButton.addEventListener('click', showStarred);
window.addEventListener('load', refreshPage);

// When I create one idea successfully, then refresh the page,
// The idea card instance is still in the ideas array
// The idea card is still visible on the DOM

// function to reload cards on page refresh if item in local storage
// check if there are items in localstorage.
// repopulate global array on page load- both DOM and data model

function refreshPage() {

  for (var i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i));
    var objectToGet = localStorage.key(i);
    console.log(localStorage.getItem(objectToGet));
    var objectToParse = localStorage.getItem(objectToGet);
    console.log(JSON.parse(objectToParse));
    var parsedObject = JSON.parse(objectToParse);
    ideaCards.push(parsedObject);
    console.log("ideaCards " + ideaCards);
    // get whole local saveToStorage
    // parse entire saveToStorage
  }
}
  // for (var i = ideaCards.length - 1; i >= 0; i--) {
  //   cardSection.innerHTML +=
  //     `<article class = 'idea-card'>
  //     <div class = "card-top">
  //       <img class="star-img" id="clearStar" src="./assets/star.svg">
  //       <img class="delete-img" src="./assets/delete.svg">
  //     </div>
  //       <h3>${ideaCards[i].title}</h3>
  //       <p>${ideaCards[i].body}</p>
  //     <div class = "card-bottom">
  //       <img src="./assets/comment.svg" class = "comment-image">
  //       <p>Comment</p>
  //     </div>
  //   </article>`
  // }
    // getitem(i)
    // parseitem(i)
    // push to ideaCards array
    // cardSection.innerHTML +=
// }

function render(title, body) {
  var newIdea = new Idea({
    title: title,
    body: body
  })
  newIdea.saveToStorage();
}

function enableSaveButton() {
  saveButton.disabled = false;
  saveButton.classList.add('enabled');
}

function disableSaveButton() {
  saveButton.disabled = true;
  saveButton.classList.remove('enabled')
}

function clearInputs() {
  titleInput.value = '';
  bodyInput.value = '';
}

function saveToCard() {
  render(titleInput.value, bodyInput.value)
  cardSection.innerHTML +=
    `<article class = 'idea-card'>
      <div class = "card-top">
        <img class="star-img" id="clearStar" src="./assets/star.svg">
        <img class="delete-img" src="./assets/delete.svg">
      </div>
        <h3>${titleInput.value}</h3>
        <p>${bodyInput.value}</p>
      <div class = "card-bottom">
        <img src="./assets/comment.svg" class = "comment-image">
        <p>Comment</p>
      </div>
    </article>`
  clearInputs();
  disableSaveButton();
}

function deleteCard() {
  if (event.target.classList.contains('delete-img')) {
    var parentCard = event.target.closest('article');
    parentCard.classList.add('hidden');
    removeIdea(parentCard);
  }

}

function removeIdea(parentCard) {
  for (var i = 0; i < ideaCards.length; i++) {
    var cardTitle = parentCard.childNodes[3].innerText;
    if (cardTitle === ideaCards[i].title) {
      ideaCards.splice(i, 1);
    }
  }
}

function clickStar() {
  for (var i = 0; i < ideaCards.length; i++) {
    if (event.target.classList.contains('star-img')) {
      var parentCard = event.target.closest('article');
      var cardTitle = parentCard.childNodes[3].innerText;
      if (cardTitle === ideaCards[i].title && !ideaCards[i].star) {
        ideaCards[i].star = true;
        // console.log(ideaCards[i].star);
        orangeStar(parentCard);
      } else if (cardTitle === ideaCards[i].title && ideaCards[i].star) {
        ideaCards[i].star = false;
        // console.log(ideaCards[i].star)
        whiteStar(parentCard)
      }
    }
  }
}

function orangeStar(parentCard){
  var starImage = parentCard.childNodes[1].childNodes[1];
  starImage.src = "./assets/star-active.svg"
}

function whiteStar(parentCard){
  var starImage = parentCard.childNodes[1].childNodes[1];
  starImage.src = "./assets/star.svg"
}

function showStarred(){
  console.log('you clicked the showStarredButton')
}

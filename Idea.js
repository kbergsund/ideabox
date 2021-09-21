class Idea {
  constructor(idea){
    if (!idea.id) {
      this.id = Date.now();
    } else {
      this.id = idea.id
    }
    this.title = idea.title;
    this.body = idea.body;
    if (!idea.star) {
      this.star = false;
    } else {
      this.star = idea.star;
    }
  }

  saveToStorage(){
    var stringifiedIdea = JSON.stringify(this);
    localStorage.setItem(`${this.id}`, stringifiedIdea);
    ideaCards.push(this);
  }

  deleteFromStorage(ideaInstance, index){
    ideaCards.splice(index, 1);
    localStorage.removeItem(localStorage.key(index));
  }

  updateIdea(index) {
    var objToParse = localStorage.getItem(localStorage.key(index));
    var starredObject = JSON.parse(objToParse);
    console.log(starredObject);
    if (starredObject.star === false) {
      starredObject.star = true;
      this.star = true;
    } else {
      starredObject.star = false;
      this.star = true;
    }
    console.log(starredObject);
    var newToStore = JSON.stringify(starredObject);
    localStorage.setItem(`${this.id}`, newToStore);
    console.log(newToStore);
  }
}

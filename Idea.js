class Idea {
  constructor(idea){
    this.id = Date.now();
    this.title = idea.title;
    this.body = idea.body;
    this.star = false;
  }
  saveToStorage(){
    // data model
    ideaCards.push(this);
    // localStorage
    var stringifiedIdea = JSON.stringify(this);
    localStorage.setItem(`${this.id}`, stringifiedIdea);
  }
  deleteFromStorage(){
    //ideaCards.splice(index, 1);
    // loop through localStorage
      // if event target id matches key of localstorage??
      // JSON.removeItem()

    // should remove the instantiated idea object from the global variable that holds all Idea objects
  }
  updateIdea(){
    // should update idea.title and idea.body with new user inputs
    // JSON.getItem();
    // JSON.parse() ;
    // update using conditionals with various
  }
}

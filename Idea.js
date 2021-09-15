class Idea {
  constructor(idea){
    this.id = 'somehow unique ID'
    this.title = idea.title;
    this.body = idea.body;
    this.star = false;
  }
  saveToStorage(){
    // should add instantiated object to our global variable that holds all Idea objects
  }
  deleteFromStorage(){
    // should remove the instantiated idea object from the global variable that holds all Idea objects
  }
  updateIdea(){
    // should update idea.title and idea.body with new user inputs
  }
}

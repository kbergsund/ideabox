# IdeaBox 
Mod1 2108 FE - Group Project

A digital Post-It web app where users can create and save idea cards. Saved cards display on a grid and can be starred or deleted at any time. Users can leave the site or refresh and all saved cards/starred states will persist.

## Deployable Link
https://kbergsund.github.io/ideabox/

## Languages/Technologies
  - Javascript
  - CSS 
  - HTML
  - Atom
  - Google Chrome or Web Browser of User's Choice
  - Mac OS Terminal/Command Line

## Learning Goals
 - Use clean HTML & CSS to match a provided comp
 - Understand how to implement client-side data persistence
 - Continue exploring how to separate the data model (with a class) and the DOM
 - Begin to work with arrays in more advanced ways to filter data

## Install + Setup
  - Clone this repo: https://github.com/kbergsund/ideabox
  - On the command line, type: **$ open index.html**

## Web App Attributes
  1. The page is fairly empty on load. Users have the ability to input their own title and body. The card is generated and displayed (and also saved to the data model) via the **Save** button. Users can generate as many cards as they would like- the cards will display in a grid at the bottom half of the page. 
  
  ![Idea Card - Generate Card](https://user-images.githubusercontent.com/87510749/134266874-4d5d83ce-1b85-443c-a485-dedb3a21b4a4.gif)

  2. Once the card has been created, users can click the **Star Button** to favorite and unfavorite an idea card at their discretion. Once a star is favorited, the star will turn orange.
  
  ![Idea Box- Favorite Card](https://user-images.githubusercontent.com/87510749/134267287-ad8e3503-ae4b-4b5c-a355-7fe0460b21f1.gif)

  3. Users also have the ability to delete any card that they have created by clicking the **X** button at the top right corner of a given card. 
  
  ![Idea Box - Delete Card](https://user-images.githubusercontent.com/87510749/134267461-cbdf2a45-3c6d-4c42-af6b-6318cafd7ae8.gif)

  4. The cards that a user creates will persist on page refresh. Through localStorage, the DOM and data model restore which ideas a user had generated, starred, or deleted.

## Contributors
  - [Kyra Bergsund](https://github.com/kbergsund)
  - [Wil Hufffman](https://github.com/Wil-Huffman)
  - [Colgan Meanor](https://github.com/colganmeanor)

## Wins
  - Completed iterations 1 - 3 and half of iteration 4 (localStorage implementation).
  - Gained valuable experience in navigating unique dynamics of group projects.
  - Learned a lot about separation of data model and DOM and the latter being dependent on the former.
  - First time applying knowledge of localStorage into a live project. 
  - Improved github workflow with working in separate branches, opening pull requests with proper comments, and merging branches on GitHub only with others present.

## Challenges + Improvements
- Working asynchronously vs synchronously. Group scheduling conflicts made it difficult for us to find many times where all 3 of us could be present and working at the exact same time.
- Because of this and the challenge of the project, we unfortunately did not finish the entire spec. We fully completed iterations 0-3, but we only got halfway through iteration 4 (the local storage features) but were not able to complete the filtering functionalities in iteration 4, or any of iteration 5. 
	
## Project Specs
  - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-1/ideabox-group.html)

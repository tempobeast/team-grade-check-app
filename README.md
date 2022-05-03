# Team Grade Checker App 

Team Grade Checker is a React based app that allows a coach or manager of a high school sports team to track the weekly grades of their athletes. The app was created with the create-react-app. The eventual intent is to allow the manager or coach to easily filter the students that need academic help and check in with them weekly to keep them eligible. 

## Features

The coach can add new player data, including name, grade, position and each of the classes the student is taking and the teacher that teaches them. 

![gif of add player](https://media.giphy.com/media/2N3JoSFxhBJmPM2TT4/giphy.gif)

The coach can then filter students based on name, position or team (and eventually based on failing grade <60% or near failing 60-70%). When a player is clicked from the player list, a player card is rendered with all of the pertinent information. If the latest grades have been input the current grade will be displayed. If not, a form will be rendered so that the coach, manager or student can input their grades. 

![gif of player list and player card](https://media.giphy.com/media/aEWuD2tvDbD14b9QG5/giphy.gif)

## Future Features

The back end has not been developed for this app yet, so the added grades do not persist. When the back end is functioning, any failing grade will result in the student, class and teacher text color chagning to red and any near failing changed to orange. I will also add a dropdown to filter failing and at-risk athletes. 

## Running the server 

To run the server locally:  

```npm install```

npm run dev


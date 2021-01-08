# Home Plannr

## Description
I learned that when you live in a house with six other college students, there is an absurd amount of things to keep track of; rent, utilities, IOUs, chores, house events (i.e. game night), groceries, and most importantly, whose pile of dirty dishes is in the sink. While messaging and group chats work, messages can get lost or buried within hundreds of other messages or memes. This app is a solution to keep track of everything in one place, especially for busy college students. In a sense, this app is like a ‘To-Do’ list but more of a ‘Keep-Track-Of-Everything’ list.

I was learning about the React-Beautiful-DND library and the idea came to me that I wanted to integrate this into a new project. Around the same time, I had a house meeting where we all talked about how the past quarter went and a snippet of that was about the issue of people forgetting to do things without being reminded. And just like that, modern problems require modern solutions, so I thought a house planner was the perfect project to work on with the react-beautiful-dnd library.

## Running Project Locally
* First clone the project
```
git clone https://github.com/KennethNguyen/home-plannr
```
* Then go into the cloned project directory.
```
cd home-plannr
```

* Install any required dependencies for the front-end and back-end in both of their respective directories.
```
cd client
npm install
cd ..
cd server
npm install
```

* Now, navigate to the /server directory from the base project directory if you aren't there already. This is where you will run the command to start the app.
```
cd server
```

* Run the command below. This command will run the front-end and the back-end at the same time. By default, the front-end is on Port 3001 and the back-end is on Port 8000. If you'd like to change the Port for the front-end, go to the /client/package.json and change the PORT=XXXX number on line 16.
```
npm run dev
```

## Utilized
* React
* @Chakra-UI - React UI framework
    * View the official website [here](https://chakra-ui.com/)
* The front-end for this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
* Node.js
* Express
* MongoDB

## Author
Kenneth Nguyen
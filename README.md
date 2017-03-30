# MEAN-App
Sample authentication app using MongoDB, Express, Angular 2 and NodeJS

Instructions to run the app:
Tutorial playlist: https://www.youtube.com/watch?v=uONz0lEWft0&list=PLillGF-RfqbZMNtaOXJQiDebNXjVapWPZ

---Set up---
1. Install node.js
2. Install MongoDb: https://www.youtube.com/watch?v=pWbMrx5rVBE&t=368s
3. Install Angular CLI: npm install -g angular-cli
4. Run npm install (once in the main directory and once in the angular-src directory)

---Run application---
1. Start the MongoDB service
  Open a Command Prompt(as an Admin)
  Go to the directory where your MongoDB is installed
  Change directory to bin
  Run net start mongodb to start the MongoDB service
  Optional: To see databases and documents (tables) you have to enter the mongo shell by running mongo
2. Start the server:
      In the main project directory run npm start or nodemon
      Optional: Install nodemon (npm install nodemon -g)
3: Start the front end site:
      In the angular-src directory run ng serve

---Additional notes---
When installing packages via npm or bower make sure you run the commands with --save so that the dependencies are saved in bower.json and/or package.json

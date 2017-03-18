# MEKN-App
Sample authentication app using MongoDB, Express, Knockout and NodeJS

Instructions to run the app:

---Set up---
1. Install node.js
2. Install MongoDb: https://www.youtube.com/watch?v=pWbMrx5rVBE&t=368s
3. Install bower (npm install bower -g)
4. Install Gulp (npm install gulp -g)
5. Run npm install (once in the main directoy and once in the frontend directory)
6. Run bower install in the frontend directory 

---Run project---

1. Start the MongoDB service
  Open a Command Prompt(as an Admin)
  Go to the directory where your MongoDB is installed
  Change directory to bin
  Run net start mongodb to start the MongoDB service
  Optional: To see databases and documents (tables) you have to enter the mongo shell by running mongo
2. Start the server:
      Change directory to meknauthapp and run npm start or nodemon
      Optional: Install nodemon (npm install nodemon -g)
3: Start the front end site:
      Run gulp serve:src
      
---Additional notes---
When insalling packages via npm or bower make sure you run the commands with --save so that the dependencies are saved in bower.json and/or package.json

  

# Requirements
* Node.js

# How to run
```
npm install
npx cypress run
```

# Comments
When you run the program, then the Video file and HTML reports will be saved into both `./cypress/videos/process.feature.mp4` and `./cucumber-report.html`. 

I designed 3 basic scenarios: 
* Process of removing laptop from shopping cart
* Simply test with log in and log out
* Purchase process of smartphone

I use 4 Page Objects: Cart, LoginPage, Menu and PlaceOrder. 

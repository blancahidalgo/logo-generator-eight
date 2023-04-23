Object-oriented Programming: SVG Logo Maker

The application allows users to enter a number of inputs into the command line in order to generate a logo - "logo.svg" file which contains the users commands and generates as an SVG image.

Table of Contents:

The Challenge
Usage Information
Installation Process
Built With
License

OVERVIEW

THE CHALLENGE

I've built a Node.js command-line application that takes in user inputs to generates a SVG logo and saves it as "logo.svg" file. 

USER STORY 

AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

ACEPTANCE CRITERIA 

GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered

USAGE INFORMATION 

1. Clone my repository & open it on any source code editor --> https://github.com/blancahidalgo/logo-generator-eight
2. Open the integrated terminal on index.js
3. Enter “node index.js” in the command line - which will run the app
4. The user will then be prompted to a number of questions in a specific order. This will run within the command line thanks to npm inquirer - the user will have to respond to every question
5. Once completed - the app will generate a logo.svg file - and the user will be able to see a preview of this logo running the live server

APP URL: 


YOUTUBE WALKTHROUGH VIDEO:  



SCREENSHOTS OF THE APP: 

PIC 1. Command Line App 

<img width="980" alt="Screenshot 2023-04-23 at 7 54 07 pm" src="https://user-images.githubusercontent.com/120780781/233832768-e0cb9257-354e-4824-a8f5-fc231903e9ce.png">


PIC 2. Running tests via Jest - npm test


<img width="379" alt="Screenshot 2023-04-23 at 7 54 50 pm" src="https://user-images.githubusercontent.com/120780781/233832815-c0531ec7-b2dd-4fea-9517-733e8e79955b.png">


PIC 3. Example of a logo generated


<img width="156" alt="Screenshot 2023-04-23 at 7 52 44 pm" src="https://user-images.githubusercontent.com/120780781/233832680-e1b6da8f-e84a-4146-9e18-e39990d1e406.png">


INSTALLATION PROCESS

1. Clone my Repo --> https://github.com/blancahidalgo/logo-generator-eight
2. Install the following packages within your command line 
- Node.JS Version 16.18.1
- Jest Version 29.4.3
- Inquirer.js: Version 8.2.4
3. Open VS Code or any other code editor
4. Open the integrated terminal in index.js 
5. Run the app!


BUILT WITH 

1. JavaScript
2. Node.js Version 
3. Jest Version 
4. Inquirer.js: Version 
5. Visual Studio Code: Website

LICENCE - MIT 

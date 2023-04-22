// Importing: inquirer package, then importing gradeful-fs, path: index.js, svg-captcha module... + the Circle, Square and Triangle modules from lib/shapes.js
const inquirer = require('inquirer');
const filesystem = require('./node_modules/graceful-fs/graceful-fs.js');
// const svgCaptcha = require('svg-captcha');
// const path = require("path");

const { Circle, Square, Triangle } = require("..lib/shapes.js");

// class Svg {
//   constructor(){
//     this.textElement = '';
//     this.shapeElement = '';
//   }

// render(){
//   return <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`;
//   }

// setTextElement(text,color) {
// this.textElement = `<text x="150%" y="120%" text-anchor="middle" fill="' + color + '" font-size="50" dy=".3em">' + text + '</text>`;
// }

//   setShapeElement(shape){
//   this.shapeElement = shape.render()
//   }
// }

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter text for the logo: Not more than 3 characters!'
  },

  {
    type: 'input',
    name: 'text-color',
    message: 'Choose a text color:',
    choices: ['red', 'blue', 'green']
  },

  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'square', 'triangle']
  }
];

// Function below will write data to the file
function writeToFile(fileName, data) {
  console.log("Writing [" + data + "] to file [" + fileName + "]")
  filesystem.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Cheers, your logo.svg is ready!");
  });
}

// Async function below will prompt the user for answers
async function init() {
  console.log("Starting init");
  var svgString = "";
  var svg_file = "logo.svg";
}
// Prompt the user for answers
const answers = inquirer.prompt(questions);

// Function below will identify the text input from the user and identify whether it's a valid entry (1-3 characters) or not
var user_text = "";
if (answers.text.length > 0 && answers.text.length < 4) {
  // 1-3 chars, valid entry
  user_text = answers.text;
} else {
  // 0 or 4+ chars, invalid entry
  console.log("Wrong input my friend, make sure you enter between 1-3 characters for your logo, no more and no less");
  return;
}

// Starts picking uo responses from the user input in CLI --> text, font color, shape color, shape type 
console.log("User text: [" + user_text + "]");
//user font color
user_font_color = answers["text-color"];
console.log("User font color: [" + user_font_color + "]");
//user shape color
user_shape_color = answers.shape;
console.log("User shape color: [" + user_shape_color + "]");
//user shape type
user_shape_type = answers["pixel-image"];
console.log("User entered shape = [" + user_shape_type + "]");


// Running a variable with if statements to identify the shape type and color selected by the user
let user_shape;
if (user_shape_type === "Square" || user_shape_type === "square") {
  user_shape = new Square();
  console.log("User selected Square shape");
}
else if (user_shape_type === "Circle" || user_shape_type === "circle") {
  user_shape = new Circle();
  console.log("User selected Circle shape");
}
else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
  user_shape = new Triangle();
  console.log("User selected Triangle shape");
}
else {
  console.log("Wrong shape selection out of the options we have!");
}
user_shape.setColor(user_shape_color);

// Create a new Svg instance and add the shape and text elements to it
var svg = new Svg();
svg.setTextElement(user_text, user_font_color);
svg.setShapeElement(user_shape);
svgString = svg.render();

//Print shape to log
console.log("Displaying shape:\n\n" + svgString);
//document.getElementById("svg_image").innerHTML = svgString;

console.log("Shape generation complete!");
console.log("Writing shape to file...");
writeToFile(svg_file, svgString);

init()























  //   // Saves the SVG file to disk
  //   fs.writeFileSync('logo.svg', captcha.data);
  // });


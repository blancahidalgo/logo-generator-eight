// Importing: inquirer module, path: index.js, svg-captcha module, fs module
const inquirer = require("inquirer");
const path = require("path");
const svgCaptcha = require('svg-captcha');
const fs = require("fs");

const {Circle, Square, Triangle} = require("..lib/shapes");

inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter text for the logo: Not more than 3 characters!'
    }, 

    {
      type: 'list',
      name: 'color',
      message: 'Choose a text color:',
      choices: ['red', 'blue', 'green']
    },

    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'square', 'triangle']
    }
  ])

  .then((answers) => {
    // Generates the SVG logo using the user's input
    const captcha = svgCaptcha.create({
      size: 4,
      ignoreChars: '0o1il',
      noise: 2,
      color: true,
      background: '#f0f0f0',
      fontSize: 50,
      width: 200,
      height: 100,
      charPreset: answers.text
    });
  
    // Saves the SVG file to disk
    fs.writeFileSync('logo.svg', captcha.data);
  });


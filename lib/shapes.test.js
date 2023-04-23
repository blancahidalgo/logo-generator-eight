// Below we impor Circle, Square and Triangle classes from the shape.js file in order to run some tests below, and make sure they rended correctly.
const {Circle, Square, Triangle} = require("./shapes.js")

// Below we are using jest.js syntax such as 'descrbe' and 'test' to run tests on the Circle, Square and Triangle classes.
describe('Circle', () => {
    test('renders, Yay', () => {
      const shape = new Circle();
      var color =('red')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}" />`);
    });
  });
  // Square Shape
  describe('Square', () => {
      test('renders, Yay', () => {
        const shape = new Square();
        var color =('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="90" y="40" width="120" height="120" fill="${color}" />`);
      });
    });
  // Triangle Shape
  describe('Triangle', () => {
      test('renders, Yay', () => {
        const shape = new Triangle();
        var color =('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150, 18, 244, 182, 56, 182" fill="${color}" />`);
      });
    });
    


























// describe('Shape', function() {
//     describe('constructor', function() {
//         it('should set the shape\'s color', function() {
//         var shape = new Shape('red');
//         expect(shape.color).to.equal('red');
//         });
//     });
    
//     describe('getArea', function() {
//         it('should throw an error', function() {
//         var shape = new Shape('red');
//         expect(shape.getArea).to.throw(Error);
//         });
//     });
//     })
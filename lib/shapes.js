// Here we define a class called Shape which has a constructor intializing 'color' and setting the 'color' value.
class Shape {
    constructor() {
        this.color = ' ';
    }
       setColor(color) {
        this.color = this.chooseColor(color);
    }  
}

class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.color}" />`;
    }
}
class Square extends Shape {
    render() {
        return `<rect x="50" y="200" width="200" height="80" stroke="black" stroke-width="3" fill="${this.color}" />`;
    }
}
class Triangle extends Shape {
    render() {
        return `<polygon height="100%" width=100%" points="10,90 50,10 90,90" stroke="black" stroke-width="3" fill="${this.color}" />`;
    }
};

module.exports = { Shape, Circle, Square, Triangle };





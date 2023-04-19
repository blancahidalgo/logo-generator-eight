class Shapes {
    constructor() {
        this.shapes = [];
    }
}
chooseColor(color) {
    switch (color) {
        case 'red':
            return 'red';
        case 'blue':
            return 'blue';
        case 'green':
            return 'green';
        default:
            return 'black';
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="${this.color}" />`;
    }
class Square extends Shape {
    render() {
        return `<rect x="10" y="10" width="80" height="80" stroke="black" stroke-width="3" fill="${this.color}" />`;
    }
class Triangle extends Shape {
    render() {
        return `<polygon points="10,90 50,10 90,90" stroke="black" stroke-width="3" fill="${this.color}" />`;
    }
}
};

module.exports = {Shapes, Circle, Square, Triangle};




}

describe('Shape', function() {
    describe('constructor', function() {
        it('should set the shape\'s color', function() {
        var shape = new Shape('red');
        expect(shape.color).to.equal('red');
        });
    });
    
    describe('getArea', function() {
        it('should throw an error', function() {
        var shape = new Shape('red');
        expect(shape.getArea).to.throw(Error);
        });
    });
    })
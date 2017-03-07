/*1.  Please write a test suite for this function. The subtotal should be the sum of each item's price times the count of each item.
e.g.:
 subtotal([{price:1,count:3}]) === 3
*/


// function to test.
var should = chai.should();
var expect = chai.expect;
function subtotal(items) {
    console.log("entering subtotal");
    var subtotals = items.reduce(function(acc,item) {
        return acc + (item.price * item.count);
    },0);
 return subtotals;
}

//test suite
describe('Test Suite for subtotal ', function(){
    

    it('should return 0 when empty array is passed', function() {
     subtotal([]).should.equal(0);
    });
    it('subtotal([{ price: 1, count: 3 }]) === 3', function() {
     subtotal([{ price: 1, count: 3}]).should.equal(3);
    });
    it('argument should be array type', function() {
      expect(function(){
              subtotal();
       }).to.throw('INVALID ARGUMENT');
    });

});
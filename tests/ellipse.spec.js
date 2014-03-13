describe('Ellipse', function(){
  var nagEllipse;
  var ellipseText = 'thisisaverylongstringthatshouldprobabllybeellipsedatsomepoint.txt';

  beforeEach(module('nag.ellipse'));

  beforeEach(inject(function($filter) {
    nagEllipse = $filter('nagEllipse');
  }));

  it('should use default values', function() {
    expect(nagEllipse(ellipseText)).to.equal('thisi...oint.txt');
  });

  it('should not ellipse with custom min length', function() {
    expect(nagEllipse(ellipseText, 10000)).to.equal(ellipseText);
  });

  it('should show the first 10 characters', function() {
    expect(nagEllipse(ellipseText, 20, 10)).to.equal('thisisaver...oint.txt');
  });

  it('should show the first 10 and last 20 characters', function() {
    expect(nagEllipse(ellipseText, 50, 10, 20)).to.equal('thisisaver...ipsedatsomepoint.txt');
  });
});

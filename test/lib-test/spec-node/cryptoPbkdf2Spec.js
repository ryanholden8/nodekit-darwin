var helper = require('./specHelper');
var crypto = require('crypto');

describe("crypto pbkdf2 functions", function() {

  it( "should produce the same key as node, in its sync form", function() {
    var key = crypto.pbkdf2Sync( "I like tacos", "beef", 10, 64 );
    expect( key.toString('base64') ).toBe( '8AavpPHN8uxdtEmy+Vl7ksMHtPf8fBgpvsvvCZtyKXyExKdSabsRdGrpapTrvotcOPy0O1RR5/I4x04IZJhNZA==' );
  })

  it( "should produce the same key as node, in its callback form", function(done) {
      var key = crypto.pbkdf2( "I like tacos", "beef", 10, 64, function(err, key) {
      expect( key.toString('base64') ).toBe( '8AavpPHN8uxdtEmy+Vl7ksMHtPf8fBgpvsvvCZtyKXyExKdSabsRdGrpapTrvotcOPy0O1RR5/I4x04IZJhNZA==' );
       done()
    } );
  })

});


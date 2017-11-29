var npm_mic_check = require("../js/index.js");
var expect = require("chai").expect;

describe("npm mic check", function(){
   describe("Feature Number One", function(){
      it("does something", function(){
         var response = new npm_mic_check.MicCheck().check('testing');
         expect(response).to.equal('testing');
      });
   });
   describe("Feature Number Two", function(){
      it("does something else", function(){
          var response = new npm_mic_check.MicCheck().check('testing', true);
          expect(response).to.equal('TESTING');
      });
   });
});
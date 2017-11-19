var npm_mic_check = require("../index.js");
var expect = require("chai").expect;

describe("npm mic check", function(){
   describe("Feature Number One", function(){
      it("does something", function(){
         var response = npm_mic_check.check('testing');
         expect(response).to.equal('testing');
      });
   });
   describe("Feature Number Two", function(){
      it("does something else", function(){
          var response = npm_mic_check.check('testing', true);
          expect(response).to.equal('TESTING');
      });
   });
});
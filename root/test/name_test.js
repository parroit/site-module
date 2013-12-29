'use strict';

var expect = require("expect.js");
var App = require("../lib/app");


describe("app", function () {
    it("is defined", function () {
        expect(App).to.be.an('function');
    });
});

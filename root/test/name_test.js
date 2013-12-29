'use strict';

var expect = require("expect.js");
var {%= js_test_safe_name %} = require("../lib/{%= name %}");


describe("{%= js_test_safe_name %}", function () {
    it("is defined", function () {
        expect({%= js_test_safe_name %}).to.be.an('object');
    });
});

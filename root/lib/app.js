/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

var templates = require("./templates");

function App(vendor){
    this.vendor = vendor;
    this.views = {
        templates:templates
    }
}

App.prototype.start = function(){
    this.vendor.$("#content").html(
        this.views.templates.home({
            name:"{%= name %}"
        })
    )
};

module.exports = App;
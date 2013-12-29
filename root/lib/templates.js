/*
 * {%= name %}
 * {%= homepage %}
 *
 * Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}
 * Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.
 */

var simplator = require("simplator"),
    includeFolder = require('include-folder'),
    subTemplates = require('simplator-subtemplates');


var templates = module.exports = includeFolder(__dirname + "/../templates" );

Object.keys(templates).forEach(function(key){
      templates[key] = simplator.compile(templates[key]);
});


subTemplates.use(templates);
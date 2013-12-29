/*
 * grunt-init-node
 * https://gruntjs.com/
 *
 * Copyright (c) 2013 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';

// Basic template description.
exports.description = 'Create a Node.js module, including Mocha unit tests.';

// Template-specific notes to be displayed before question prompts.
exports.notes = '_Project name_ shouldn\'t contain "node" or "js" and should ' +
    'be a unique ID not already in use at search.npmjs.org.';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
    'install_. After that, you may execute project tasks with _grunt_. For ' +
    'more information about installing and configuring Grunt, please see ' +
    'the Getting Started guide:' +
    '\n\n' +
    'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function (grunt, init, done) {

    init.process({type: 'node'}, [
        // Prompt for these values.
        init.prompt('name'),
        init.prompt('description'),
        init.prompt('version'),
        init.prompt('repository'),
        init.prompt('homepage'),
        init.prompt('bugs'),
        init.prompt('licenses'),
        init.prompt('author_name'),
        init.prompt('author_email'),
        init.prompt('author_url'),
        init.prompt('node_version', '>= 0.10.0'),
        init.prompt('main')

    ], function (err, props) {
        props.keywords = [];
        props.devDependencies = {
            "grunt": "~0.4.1",
            "grunt-mocha-test": "~0.7.0",
            "expect.js": "*",
            "grunt-contrib-watch": "~0.5.3",
            "grunt-browserify": "~1.2.11",
            "grunt-processhtml": "~0.2.5",
            "grunt-contrib-less": "~0.8.2",
            "grunt-contrib-copy": "~0.4.1",
            "grunt-contrib-clean": "~0.5.0",
            "brfs": "0.0.8",
            "folderify": ">0.2.0",
            "grunt-contrib-connect": "~0.5.0"
        };
        props.dependencies ={
            "include-folder": ">0.4.0",
            "simplator": ">0.0.2",
            "simplator-subtemplates": ">0.1.0",
            "simplator-type-filters": ">0.2.0"
        };
        props.npm_test =  "grunt test";

        props.travis = true;

        // Files to copy (and process).
        var files = init.filesToCopy(props);

        // Add properly-named license files.
        init.addLicenseFiles(files, props.licenses);

        // Actually copy (and process) files.
        init.copyAndProcess(files, props);

        // Generate package.json file.
        init.writePackageJSON('package.json', props);

        // All done!
        done();
    });

};

# grunt-init-node

> Create an npm Node.js module with [grunt-init][], including [Mocha][] unit tests.

## Features configured

* The module will use grunt watch [grunt-mocha-test][] to continuously run your unit tests.
* Config.json files are git ignored, to keep your secrets info secrets from the beginning of your work.
* Travis CI will be configured by default. Travis builds will run on node 0.10
* README file contains badges for Travis CI, NPM module version and Code Climate


## Installation
If you haven't already done so, install [grunt-init][].

Once grunt-init is installed, place this template in your `~/.grunt-init/` directory.
It's recommended that you use git to clone this template into that directory, as follows:

```
git clone git@github.com:parroit/npm-module.git ~/.grunt-init/npm-module
```

_(Windows users, see [the documentation][grunt-init] for the correct destination directory path)_

## Usage

At the command-line, cd into an empty directory, run this command and follow the prompts.

```
grunt-init node
```

_Note that this template will generate files in the current directory, so be sure to change
to a new directory first if you don't want to overwrite existing files._



[grunt-init]: http://gruntjs.com/project-scaffolding
[grunt-mocha-test]: https://github.com/pghalliday/grunt-mocha-test
[Mocha]: http://mochajs.org/

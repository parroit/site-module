# {%= name %}{% if (travis) { %}
[![Build Status](https://secure.travis-ci.org/{%= git_user %}/{%= git_repo %}.png?branch=master)](http://travis-ci.org/{%= git_user %}/{%= git_repo %}){% } %} {% if (travis) { %} [![Npm module](https://badge.fury.io/js/{%= git_repo %}.png)](https://npmjs.org/package/{%= git_repo %}){% } %} [![Code Climate](https://codeclimate.com/github/{%= git_user %}/{%= git_repo %}.png)](https://codeclimate.com/github/{%= git_user %}/{%= git_repo %})

{%= description %}

## Getting Started
Install the module with: `npm install {%= name %} --save`

```javascript
var {%= js_safe_name %} = require('{%= name %}');
{%= js_safe_name %}.awesome(); // "awesome"
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality.


## License
Copyright (c) {%= grunt.template.today('yyyy') %} {%= author_name %}  
Licensed under the {%= licenses.join(', ') %} license{%= licenses.length === 1 ? '' : 's' %}.

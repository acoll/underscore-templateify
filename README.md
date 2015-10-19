# underscore-templateify
A Browserify Transform for Underscore Templates

**underscore-templateify** lets you use underscore templates with [browserify][]:

```js
var template = require('./template.html');
var html = template({name: 'Adam'});
```

## Usage
Via API
```js
bundle.transform(require('underscore-templateify'));
```

Via CLI
```
browserify -t underscore-templateify entry.js -o bundle.js
```

Requiring any .html files will return a template function.

[browserify]: https://github.com/substack/node-browserify
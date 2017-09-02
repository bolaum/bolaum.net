var hbs = require('handlebars');
var helperslib = require('handlebars-helpers/lib');

// use handlebars 'truncate' instead of the one in hexo-renderer-handlebars
hbs.registerHelper('truncate', helperslib.string.truncate);

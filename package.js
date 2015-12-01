Package.describe({
    name: 'mgn:material-ui',
    version: '0.2.4',
    // Add react-material-ui to your project.
    summary: 'Material-UI using official React package',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/managination/react-material-ui.git',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

var MUI_VERSION = '0.13.4';
var EXTERNALIFY_VERSION = "0.1.0";
Npm.depends({
    'externalify': EXTERNALIFY_VERSION,
    'material-ui': MUI_VERSION,
    'react-tap-event-plugin': '0.2.1'
});

Package.onUse(function(api){

    api.use(['react']);
    api.use(['cosmos:browserify']);
    api.use("templating", "client");


    api.addFiles([
        'mui.browserify.js',
        'home.html'
    ], "client");

    api.addAssets('mui.browserify.options.json', 'client')

    api.export(["MUI", "injectTapEventPlugin"]);
});

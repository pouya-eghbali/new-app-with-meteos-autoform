Package.describe({
  name: 'akoerp:autoform-plain',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  //  api.versionsFrom('1.8.2');
  api.use('ecmascript');
  api.use('templating');
  api.use('aldeed:autoform');
  api.mainModule('autoform-plain.js');
  api.addFiles([
    // plain Template
    'templates/plain/components/quickForm/quickForm.html',
    'templates/plain/components/quickForm/quickForm.js',
    'templates/plain/components/afArrayField/afArrayField.html',
    'templates/plain/components/afFormGroup/afFormGroup.html',
    'templates/plain/components/afObjectField/afObjectField.html',
    'templates/plain/components/afObjectField/afObjectField.js',
    // plain-fieldset Template
    'templates/plain-fieldset/plain-fieldset.html',
    'templates/plain-fieldset/plain-fieldset.js',
  ], 'client')
});

Package.onTest(function (api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('akoerp:autoform-plain');
  api.mainModule('autoform-plain-tests.js');
});

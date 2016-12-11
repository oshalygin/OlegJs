module.exports = function (wallaby) {
  'use strict';
  return {
    files: [
      'client/**/*.js*',
      'server/**/*.js',
      '!client/**/*.json',
      '!client/**/*.spec.js*',
      '!server/**/*.spec.js*',
      { pattern: '/**/*.png', load: 'null' },
      { pattern: '/**/*.jpg', load: 'null' },
      { pattern: '/**/*.jpeg', load: 'null' }
    ],

    tests: [
      'client/**/*.spec.js',
      'server/**/*.spec.js'

    ],
    env: {
      type: 'node',
      runner: 'node',
      params: {
        env: 'NODE_ENV=test'
      }
    },
    compilers: {
      '**/*.js*': wallaby.compilers.babel({
        presets: ['react', 'es2015'],
        plugins: ['transform-object-rest-spread']
      })
    },
    debug: true,
    setup() {

      const noop = () => { };

      require.extensions['.css'] = noop;
      require.extensions['.ico'] = noop;
      require.extensions['.png'] = noop;
      require.extensions['.svg'] = noop;
      require.extensions['.jpg'] = noop;
      require.extensions['.jpeg'] = noop;

      const jsdom = require('jsdom').jsdom;
      const exposedProperties = ['window', 'navigator', 'document'];

      global.document = jsdom('');
      global.window = document.defaultView;
      Object.keys(document.defaultView).forEach((property) => {
        if (typeof global[property] === 'undefined') {
          exposedProperties.push(property);
          global[property] = document.defaultView[property];
        }
      });


      global.localStorage = {
        getItem() { },
        setItem() { }
      };

      global.navigator = {
        userAgent: 'node.js'
      };

      //noinspection JSUnresolvedVariable
      documentRef = document; //eslint-disable-line no-undef
    }
  };
};

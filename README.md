# tdd-js-node
## Minimal example of running Jasmine in Node environment

Many developers begin testing JavaScript in the browser with Jasmine. With node and
jasmine-node, one can run the tests on node instead. This is a minimal example of
running the tests present in [tdd-js](https://github.com/cymen/tdd-js) under node.

### Getting started

#### clone

    git clone git@github.com:cymen/tdd-js-node.git

#### install node

This is platform-specific and will not be addressed here. Instead, visit:

http://nodejs.org/download/

#### install packages with `npm install`

    > npm install

    npm http GET https://registry.npmjs.org/jasmine-node/1.11.0
    npm http 304 https://registry.npmjs.org/jasmine-node/1.11.0
    ...
    jasmine-node@1.11.0 node_modules/jasmine-node
    ├── underscore@1.5.2
    ├── mkdirp@0.3.5
    ├── walkdir@0.0.7
    ├── coffee-script@1.6.3
    ├── requirejs@2.1.9
    ├── jasmine-growl-reporter@0.0.2 (growl@1.7.0)
    ├── jasmine-reporters@0.2.1
    └── gaze@0.3.4 (minimatch@0.2.12, fileset@0.1.5)

#### run tests with `npm test`

    > npm test

    > tdd-js-node@0.0.1 test /Users/cvig/dev/tdd-js-node
    > jasmine-node --forceexit javascript_spec.js

    ..............................................

    Finished in 0.064 seconds
    46 tests, 74 assertions, 0 failures, 0 skipped

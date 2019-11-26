// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by autoform-plain.js.
import { name as packageName } from "meteor/akoerp:autoform-plain";

// Write your tests here!
// Here is an example.
Tinytest.add('autoform-plain - example', function (test) {
  test.equal(packageName, "autoform-plain");
});

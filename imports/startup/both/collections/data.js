import { Mongo } from 'meteor/mongo';

import SimpleSchema from 'simpl-schema';

SimpleSchema.extendOptions(['autoform']);

Profiles = new Mongo.Collection('Profiles');

// Attach schema for autoForm
Profiles.attachSchema(new SimpleSchema({
  'name': {
    type: String
  },
  // Button in app header
  'numberCheck': {
    type: Number,
    label: 'Number Check',
    autoform: {
      type: 'select',
      options() {
        return [{
          label: '0',
          value: 0
        }, {
          label: '1',
          value: 1
        }, {
          label: '2',
          value: 2
        }];
      },
      firstOption: false
    },
    optional: true
  },
  'booleanCheck': {
    type: Boolean,
    label: 'Boolean Check',
    autoform: {
      type: 'select',
      options() {
        return [{
          label: 'No',
          value: false
        }, {
          label: 'Yes',
          value: true
        }];
      },
      firstOption: false
    },
    optional: true
  }
}));

if (Meteor.isServer) {
  Profiles.allow({
    insert(userId, doc, fields, modifier) {
      return true;
    },
    update(userId, doc, fields, modifier) {
      return true;
    },
    remove(userId, doc, fields, modifier) {
      return false;
    }
  });
}
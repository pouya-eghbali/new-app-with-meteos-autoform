/* global AutoForm */

Template["afObjectField_bootstrap3-horizontal"].helpers({
  rightColumnClass: function () {
    return this['input-col-class'] || "";
  },
  afFieldLabelAtts: function () {
    // Use only atts beginning with label-
    var labelAtts = {};
    Object.entries(this).forEach(function ([key, val]) {
      if (key.indexOf("label-") === 0) {
        labelAtts[key.substring(6)] = val;
      }
    });
    // Add bootstrap class
    labelAtts = AutoForm.Utility.addClass(labelAtts, "control-label");
    return labelAtts;
  },
  quickFieldsAtts: function () {
    const { name, 'id-prefix': IdPrefix } = this
    var atts = { name, 'id-prefix': IdPrefix }
    // We want to default to using bootstrap3 template below this point
    // because we don't want horizontal within horizontal
    atts.template = 'bootstrap3';
    return atts;
  }
});

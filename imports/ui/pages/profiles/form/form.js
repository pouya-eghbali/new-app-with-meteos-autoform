Template.profilesForm.helpers({
  mode() {
    return (FlowRouter.getParam('id') === 'insert') ? "insert" : "update";
  },
  data() {
    return Profiles.findOne(FlowRouter.getParam("id"));
  }
});
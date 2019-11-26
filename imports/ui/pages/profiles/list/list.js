Template.profilesList.helpers({
  data() {
    return Profiles.find();
  }
});
Template.profilesList.events({
  'click .delete'(e) {
    Profiles.remove($(e.target).data('id'));
  }
});
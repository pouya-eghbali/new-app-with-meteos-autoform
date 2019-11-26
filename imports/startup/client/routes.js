import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import bootstrap styles
import '../../ui/stylesheets/bootstrap.min.css';
import '../../ui/plugins/bootstrap.min.js';

// Import needed templates
import '../../ui/layouts/body/body.js';

FlowRouter.route('/', {
  name: 'profile.list',
  action() {
    import('/imports/ui/pages/profiles/list').then(() => {
      BlazeLayout.render("App_body", {
        main: "profilesList"
      });
    });
  }
});

FlowRouter.route('/profile/form/:id', {
  name: 'profile.form',
  action() {
    import('/imports/ui/pages/profiles/form').then(() => {
      BlazeLayout.render("App_body", {
        main: "profilesForm"
      });
    });
  }
});
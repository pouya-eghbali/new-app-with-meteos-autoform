let autoFormHooksObject = {
  // Called when any submit operation succeeds
  onSuccess: function (formType, result) {
    console.log(result);
  },
  // Called when any submit operation fails
  onError: function (formType, error) {
    console.log(error);
  }
};

AutoForm.addHooks(null, autoFormHooksObject);
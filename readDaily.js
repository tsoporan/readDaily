if (Meteor.isClient) {
  Template.body.helpers({
    year: function() {
      return new Date().getFullYear();
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

if (Meteor.isClient) {
  Template.navItems.helpers({
    activeIfTemplateIs: function (template) {
      var currentRoute = Router.current();
      return currentRoute &&
        template === currentRoute.lookupTemplate() ? 'active' : '';
    }
  });
  Template.articles.helpers({
    maybeSelected: function () {
      var currentRoute = Router.current();
      return currentRoute &&
        this._id === currentRoute.params._id ? 'selected' : '';
    }
  });
}

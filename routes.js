Router.configure({
   layoutTemplate: 'layout'  //can be any template name
 });


Router.map(function () {
  this.route('about');  // By default, path = '/about', template = 'about'
  this.route('home', {
    path: '/',  //overrides the default '/home'
  });
  this.route('articles', {
    data: function () {return Articles.find()}  //set template data context
  });
  this.route('article', {
    path: '/article/:_id',
    data: function () {return Articles.findOne({_id: this.params._id})},
    template: 'fullArticle'
  });
});
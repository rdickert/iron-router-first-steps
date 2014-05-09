Router.configure({
   layoutTemplate: 'layout'  //can be any template name
 });


Router.map(function () {
  this.route('home', {
    path: '/',
  });
  this.route('about');
  this.route('articles', {
    // articles now under `articleList` instead of `this`
    data: {
      articleList: function () {return Articles.find()},
      selectedArticle: {}
    }
  });
  this.route('article', {
    path: '/article/:_id',
    // provide data for both `articleList` and `selectedArticle`
    data: function () {
      return {
        articleList: Articles.find(),
        selectedArticle: Articles.findOne({_id: this.params._id})
      }
    },
    template: 'articles'  //change template target
  });
});

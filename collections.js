Articles = new Meteor.Collection('articles');

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (! Articles.findOne()){
      var articles = [
        {title: 'Article 1', body: 'This is article 1'},
        {title: 'Article 2', body: 'This is article 2'},
        {title: 'Article 3', body: 'This is article 3'}
      ];
      articles.forEach(function (article) {
        Articles.insert(article);
      })
    }
  });
}

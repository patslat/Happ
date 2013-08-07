window.Happ = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($content) {
    var days = new Happ.Collections.Days();
    days.fetch({
      success: function(collection) {
        new Happ.Routers.Days($content, days);
        Backbone.history.start();
        Backbone.history.navigate("#/days/" + collection.last().id);
      }
    })
  }
};

$(document).ready(function(){
  new Happ.initialize($('#content'));
});

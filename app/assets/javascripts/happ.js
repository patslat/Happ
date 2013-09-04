window.Happ = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function($content) {
    var days = new Happ.Collections.Days();
    days.fetch({
      data: { page: 1 },
      success: function(collection) {
        new Happ.Routers.Days($content, days);
        var index = new Happ.Views.DaysIndex({ collection: collection });
        $("#dates-index").append(index.render().$el);
        Backbone.history.start();
        Backbone.history.navigate("#/days/today");
      }
    })
  }
};

$(document).ready(function(){
  new Happ.initialize($('#content'));
});

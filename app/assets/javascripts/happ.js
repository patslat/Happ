window.Happ = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Happ.Routers.Days()
  }
};

$(document).ready(function(){
  new Happ.initialize();
});

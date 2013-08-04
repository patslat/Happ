Happ.Models.Day = Backbone.Model.extend({
  parse: function(response) {
    response.rating = new Backbone.Model.Rating(response.rating)
  }
});

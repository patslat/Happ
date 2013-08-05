Happ.Models.Day = Backbone.Model.extend({
  parse: function(response) {
    response.rating = new Happ.Models.Rating(response.rating);
    return response;
  }
});

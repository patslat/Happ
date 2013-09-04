Happ.Collections.Days = Backbone.Collection.extend({

  model: Happ.Models.Day,
  url: "/days",

  getData: function(column_name) {
    var n = this.length,
    x = 0,
    xmin = 0,
    xmax = 10,
    step = ((xmax - xmin) / n),
    data = this.map(function(day) {
      x += step;
      return {
        x: x,
        y: day.get("rating").get(column_name)
      };
    });
    return data;
  },

  parse: function(response) {
    this.currentPage = response.page;
    this.totalPages = response.total;
    return response.models;
  },

});

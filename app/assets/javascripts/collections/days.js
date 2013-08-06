Happ.Collections.Days = Backbone.Collection.extend({

  model: Happ.Models.Day,
  url: "/days",

  getData: function(column_name) {
    var n = this.length,
    x = -1.0,
    xmin = -1.0,
    xmax = 7,
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

});

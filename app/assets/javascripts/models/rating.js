Happ.Models.Rating = Backbone.Model.extend({

  ratingNames: function () {
    return ["overall_rating",
      "sleep_rating",
      "diet_rating",
      "exercise_rating",
      "social_rating"
    ];
  },

  readableNames: function () {
    return _(this.ratingNames()).map(function(name) {
        var new_name = name.replace(/_/, " ")
        new_name = new_name[0].toUpperCase() + new_name.slice(1, new_name.length);
        for(var i = 0; i < new_name.length; i++) {
          if (new_name[i] == " ") {
            new_name = new_name.slice(0, i + 1)
          }
        }
        return new_name;
    });
  },

});

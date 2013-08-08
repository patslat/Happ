Happ.Views.DayShow = Backbone.View.extend({
  initialize: function(options) {
    this.model = options.model;
    this.next = options.next;
    this.previous = options.previous;
  },

  template: JST['days/show'],

  render: function() {
    this.$el.html(this.template({
      model: this.model,
      previous: this.previous,
      next: this.next
    }));
    return this;
  },

  appendGraph: function() {
    var rating = this.model.get("rating");
    var ratingData = [],
        readableNames = rating.printableRatingNames()
        colors = ["blue", "red", "yellow", "purple", "green"];
    rating.ratingNames().forEach(function(name, idx) {
      ratingData.push({
        ratingName: name,
        rating: rating.get(name),
        readableName: readableNames[idx],
        color: colors[idx]
      })
    })
    var bar = barGraph();
    bar(".single-day-graph");
    bar.draw(ratingData);
  },
});

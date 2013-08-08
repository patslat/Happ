Happ.Views.DaysSummary = Backbone.View.extend({
  loadingTemplate: JST['days/summary_loading'],

  template: JST['days/summary'],

  events: {
    "click .legend-item": "toggleLine"
  },

  render: function() {
    this.$el.html(this.template);
    return this;
  },

  renderGraph: function() {

    overallData = this.collection.getData("overall_rating"),
    sleepData = this.collection.getData("sleep_rating"),
    dietData = this.collection.getData("diet_rating"),
    exerciseData = this.collection.getData("exercise_rating"),
    socialData = this.collection.getData("social_rating");

    // Build the plot.
    var plot = xkcdplot();
    plot("#graph");
    // Add the lines.
    plot.plot(overallData, {stroke: "blue", name: "Overall Day", className: "overall-data"});
    plot.plot(sleepData, {stroke: "red", name: "Sleep", className: "sleep-data"});
    plot.plot(dietData, {stroke: "yellow", name: "Diet", className: "diet-data"});
    plot.plot(exerciseData, {stroke: "purple", name: "Exercise", className: "exercise-data"});
    plot.plot(socialData, {stroke: "green", name: "Social", className: "socialData"});
    // Add the Legend
    plot.addLegend();
    // Render the image.
    plot.xlim([-.5, 10.5]).ylim([0, 10.5]).draw();

    return this;
  },

  toggleLine: function(event) {
    var lineName = "." + $(event.target).attr("data-line-name");
    $(lineName).toggle();
  }
});

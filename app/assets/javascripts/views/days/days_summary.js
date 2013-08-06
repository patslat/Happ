Happ.Views.DaysSummary = Backbone.View.extend({
  loadingTemplate: JST['days/summary_loading'],

  template: JST['days/summary'],

  render: function() {
    var xmin = -1.0,
        xmax = 7,
        N = 100,
        overallData = this.collection.getData("overall_rating"),
        sleepData = this.collection.getData("sleep_rating"),
        dietData = this.collection.getData("diet_rating"),
        exerciseData = this.collection.getData("exercise_rating"),
        socialData = this.collection.getData("social_rating");
        
    // Build the plot.
    var plot = xkcdplot();
    plot("body");
    // Add the lines.
    plot.plot(overallData);
    plot.plot(sleepData, {stroke: "red"});
    plot.plot(dietData, {stroke: "yellow"});
    plot.plot(exerciseData, {stroke: "purple"});
    plot.plot(socialData, {stroke: "green"});
console.log(overallData)
    // Render the image.
    plot.xlim([-1.5, 7.5]).draw();

    return this;
  }
});

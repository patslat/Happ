Happ.Views.DaysSummary = Backbone.View.extend({
  loadingTemplate: JST['days/summary_loading'],

  template: JST['days/summary'],

  render: function() {
    overallData = this.collection.getData("overall_rating"),
    sleepData = this.collection.getData("sleep_rating"),
    dietData = this.collection.getData("diet_rating"),
    exerciseData = this.collection.getData("exercise_rating"),
    socialData = this.collection.getData("social_rating");

    // Build the plot.
    var plot = xkcdplot();
    plot("#graph");
    // Add the lines.
    plot.plot(overallData, {stroke: "blue", name: "Overall Day"});
    plot.plot(sleepData, {stroke: "red", name: "Sleep"});
    plot.plot(dietData, {stroke: "yellow", name: "Diet"});
    plot.plot(exerciseData, {stroke: "purple", name: "Exercise"});
    plot.plot(socialData, {stroke: "green", name: "Social"});
    // Add the Legend
    plot.addLegend();
    // Render the image.
    plot.xlim([-.5, 10.5]).ylim([0, 10.5]).draw();

    return this;
  }
});

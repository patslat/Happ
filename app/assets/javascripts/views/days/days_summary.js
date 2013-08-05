Happ.Views.DaysSummary = Backbone.View.Extend({
  loadingTemplate: JST['days/summary_loading'],

  template: JST['days/summary'],

  render: function() {

    this.$el.html(this.loadingTemplate());
    return this;
  }
});

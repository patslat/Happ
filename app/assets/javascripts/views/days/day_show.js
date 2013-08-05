Happ.Views.DayShow = Backbone.View.extend({
  template: JST['days/show'],

  render: function() {
    this.$el.html(this.template({model: this.model}));
    return this;
  }
});

Happ.Views.DayNew = Backbone.View.extend({

  template: JST['days/new'],

  render: function() {
    this.$el.html(this.template)
    return this;
  }

});

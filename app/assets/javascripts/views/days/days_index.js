Happ.Views.DaysIndex = Backbone.View.extend({

  template: JST['days/index'],

  render: function() {
    this.$el.html(this.template({collection: this.collection}));
    return this;
  }

});

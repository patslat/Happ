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
  }
});

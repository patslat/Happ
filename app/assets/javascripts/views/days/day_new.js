Happ.Views.DayNew = Backbone.View.extend({

  initialize: function(options) {
    this.collection = options.collection;
    this.last = options.last;
    this.date = options.date;
  },

  template: JST['days/new'],

  events: {
    "click #new-rating":"create"
  },

  render: function() {
    this.$el.html(this.template({
      date: this.date,
      last: this.last
    }));
    return this;
  },

  create: function(event) {
    var form = $("form").serializeJSON();
    form.day.date = this.date;
    var day = this.collection.create(form, {
      wait: true,
      success: this.createSuccessCallback
    });
  },

  createSuccessCallback: function(model, response) {
    Backbone.history.navigate("#/days/" + model.id);
  }

});

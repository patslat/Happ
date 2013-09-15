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

    this.installTooltip();

    return this;
  },

  installTooltip: function () {
    this.$(".rating-input")
      .tooltip({
        title: function () { return this.value },
        placement: "right",
        delay: { hide: 500 }
      })
      .on("change", function () {
        var self = this;
        setTimeout( function () {
          $(self)
          .attr("data-original-title", self.value)
          .tooltip("show");
        }, 1)
      })
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

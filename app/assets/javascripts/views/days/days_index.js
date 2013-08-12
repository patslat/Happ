Happ.Views.DaysIndex = Backbone.View.extend({

  initialize: function(options) {
    this.collection = options.collection;
    var self = this;
    this.collection.on("sync", function() {
      self.render();
    })
  },

  template: JST['days/index'],

  render: function() {
    this.$el.html(this.template({collection: this.collection}));
    return this;
  }

});

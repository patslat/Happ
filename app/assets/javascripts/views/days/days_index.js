Happ.Views.DaysIndex = Backbone.View.extend({

  initialize: function(options) {
    this.collection = options.collection;
    var self = this;
    this.collection.on("add", function() {
      self.render();
    });
  },

  template: JST['days/index'],

  listenForScroll: function () {
    $(window).off("scroll");
    var throttledCallback = _.throttle(this.nextPage.bind(this), 200);
    $(window).on("scroll", throttledCallback);
  },

  nextPage: function () {
    var self = this;
    if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
      if (self.collection.currentPage < self.collection.totalPages) {
        $(".days-list").append($('<li class="loading"><h3>Loading more...</h3></li>'));
        self.collection.fetch({
          data: { page: self.collection.currentPage + 1},
          wait: true,
          remove: false
        });
      }
    }
  },

  render: function() {
    this.$el.html(this.template({ collection: this.collection }));
    this.listenForScroll();
    return this;
  },
});

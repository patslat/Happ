Happ.Views.DaysIndex = Backbone.View.extend({

  initialize: function(options) {
    this.collection = options.collection;
    var self = this;
    this.collection.on("add", function() {
      self.render();
    });
  },

  template: JST['days/index'],

  render: function() {
    this.off();
    var self = this;
    var nextPage = function () {
      if (self.collection.currentPage < self.collection.totalPages &&
        $(window).scrollTop() > $(document).height() - $(window).height() - 50)
      {
        $("window").off("scroll", nextPage);
        $(".days-list").append($('<li class="loading"><h3>Loading more...</h3></li>'));

        self.collection.fetch({
          wait: true,
          remove: false,
          data: { page: self.collection.currentPage },
          success: function () {
            self.collection.currentPage += 1;
          }
        });

      } else if (self.collection.currentPage === self.collection.totalPages) {
        $('.loading').remove();
        $(window).off("scroll", nextPage);
      }
    }

    $('.loading').remove();
    this.$el.html(this.template({ collection: this.collection }));
    $(window).on("scroll", nextPage);
    return this;
  },
});

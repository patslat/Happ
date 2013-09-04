Happ.Routers.Days = Backbone.Router.extend({
  initialize: function($content, collection){
    this.$content = $content;
    this.collection = collection; 
  },

  routes: {
    "": "home",
    "entries": "index",
    "entries/page":"index",
    "days/today": "today",
    "days/:id": "show",
    "summary": "summary",
  },

  home: function() {
    this.model = this.collection.last();
    var lastDay = this.model.get("date"),
        today = Date.today().toString("ddd, dd MMM yyyy");
    if (lastDay !== today) {
      Backbone.history.navigate("#/days/today");
    } else {
      Backbone.history.navigate("#/days/" + this.model.get("id"));
    }
  },

  today: function() {
    // TODO today view or form
    this.model = this.collection.last();
    var lastDay = this.model.get("date"),
        today = Date.today().toString("ddd, dd MMM yyyy");

    if (lastDay !== today) {
      var content = new Happ.Views.DayNew({
        collection: this.collection,
        last: this.model,
        date: today
      });
      this.$content.html(content.render().$el);
    } else {
      Backbone.history.navigate("#/days/" + this.model.get("id"));
    }
  },

  index: function(page) {
    var content = new Happ.Views.DaysIndex({ collection: this.collection });
    this.$content.html(content.render().$el);
  },

  show: function(id) {
    this.model = this.collection.get(id);
    var index = this.collection.indexOf(this.model);
        previous = this.collection.at(index - 1),
        next = this.collection.at(index + 1);
        self = this;

    if (!previous && (this.collection.currentPage < this.collection.totalPages)) {
      this.collection.fetch({
        wait: true,
        remove: false,
        data: { page: this.collection.currentPage + 1 },
        success: function () {
          index = self.collection.indexOf(self.model);
          previous = self.collection.at(index - 1);
          var content = new Happ.Views.DayShow({
            model: self.model,
            next: next,
            previous: previous
          });
          self.$content.html(content.render().$el);
          content.appendGraph();
        }
      });
    } else {
      var content = new Happ.Views.DayShow({
        model: this.model,
        next: next,
        previous: previous
      });

      this.$content.html(content.render().$el);
      content.appendGraph();
    }
  },

  summary: function() {
    var self = this;
    this.$content.html($("<h1>CRUNCHING NUMBERS YO</h1>"));
    this.collection.fetch({
      reset: true,
      success: function () {
        var content = new Happ.Views.DaysSummary({ collection: self.collection });
        self.$content.html(content.render().$el);
        content.renderGraph();
      }
    });
  },
});

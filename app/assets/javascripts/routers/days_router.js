Happ.Routers.Days = Backbone.Router.extend({
  initialize: function($content, collection){
    this.$content = $content;
    this.collection = collection; 
  },

  routes: {
    "days": "index",
    "days/today": "today",
    "days/:id": "show",
    "summary": "summary",
  },

  today: function() {
    // TODO today view or form
    this.model = this.collection.last();
    var lastDay = this.model.get("date"),
        today = Date.today().toString("ddd, dd MMM yyyy");

    if (lastDay !== today) {
      var content = new Happ.Views.DayNew();
      this.$content.html(content.render().$el);
    } else {
      Backbone.history.navigate("#/days/" + this.model.get("id"));
    }
  },

  index: function() {
    var content = new Happ.Views.DaysIndex({ collection: this.collection });
    this.$content.html(content.render().$el);
  },

  show: function(id) {
    this.model = this.collection.get(id);
    var index = this.collection.indexOf(this.model);
        previous = this.collection.at(index - 1),
        next = this.collection.at(index + 1);
    var content = new Happ.Views.DayShow({
      model: this.model,
      next: next,
      previous: previous
    });
    this.$content.html(content.render().$el);
    content.appendGraph();
  },

  summary: function() {
    var content = new Happ.Views.DaysSummary({ collection: this.collection });
    this.$content.html(content.render().$el);
    content.renderGraph();
  },
});

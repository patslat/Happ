Happ.Routers.Days = Backbone.Router.extend({
  initialize: function($content, collection){
    this.$content = $content;
    this.collection = collection; 
  },

  routes: {
    "": "index",
    "days/:id": "show",
    "summary": "summary",
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
  },

  summary: function() {
    var content = new Happ.Views.DaysSummary({ collection: this.collection });
    // append a container for d3 to render graph in
    this.$content.html('<div id="graph"></div>');
    content.render();
  },
});

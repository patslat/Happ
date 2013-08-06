Happ.Routers.Days = Backbone.Router.extend({
  initialize: function($content, collection){
    this.$content = $content;
    this.collection = collection; 
  },

  routes: {
    "": "index",
    "summary": "summary",
    "days/:id": "show",
  },

  index: function() {
    var content = new Happ.Views.DaysIndex({ collection: this.collection });
    this.$content.html(content.render().$el);
  },

  show: function(id) {
    this.model = this.collection.get(id);
    var content = new Happ.Views.DayShow({ model: this.model });
    this.$content.html(content.render().$el);
  },

  summary: function() {
    var content = new Happ.Views.DaysSummary({ collection: this.collection });
    this.$content.html(content.render().$el);
  }
});

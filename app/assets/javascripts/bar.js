function barGraph() {
  var margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 60
  },
    width = 350 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

  var formatPercent = d3.format(".0%");

  var x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1);

  var y = d3.scale.linear()
      .range([height, 0]);

  var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

  var bar = function(div) {
    svg = d3.select(div).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    return bar;
  };

  bar.draw = function (ratings) {
    svg.data(ratings);
      x.domain(ratings.map(function(d) { return d.readableName }));
      y.domain([0, 10]);
      svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis);

      svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", -50)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Rating");

      svg.selectAll(".bar")
          .data(ratings)
        .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function(d) { return x(d.readableName); })
          .attr("width", x.rangeBand())
          .attr("y", function(d) { return y(d.rating); })
          .attr("height", function(d) { return height - y(d.rating); })
          .attr("fill", function(d) { return d.color })
          .attr("class", function(d) { return d.ratingName })

    return bar;
  };

  function type(d) {
    console.log(d)
    d.rating = +d.rating;
    return d;
  }

  return bar;
};

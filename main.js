    
 
     function buttons1995() {
        var year = "no1995"
        main(year);
      }
      function buttons1998() {
        var year = "no1998"
        main(year);
      }
      function buttons2001() {
        var year = "no2001";
        main(year);
      }
      function buttons2004() {
        var year = "no2004"
        main(year);
      }
      function buttons2007() {
        var year = "no2007"
        main(year);
      }
      function buttons2010() {
        var year = "no2010";
        main(year);
      }
      function buttons2013() {
        var year = "no2013"
        main(year);
      }
      function buttons2015() {
        var year = "no2015"
        main(year);
      }
      function buttons2018() {
        var year = "no2018";
        main(year);
      }

      
    function main(year){
    var svg = d3.select("svg"),
      width = +svg.attr("width"),
      height = +svg.attr("height");
    
    // Map and projection
    var projection = d3.geoMercator()
      .scale(70)
      .center([0,20])
      .translate([width / 2, height / 2]);
    
    // Data and color scale
    var data = d3.map();
    var colorScale = d3.scaleThreshold()
      .domain([1000, 10000, 100000, 30000, 1000000, 500000])
      .range(d3.schemeBlues[7]);

    
    d3.queue()
      .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
  
      .defer(d3.csv, "BNP.csv", function(d) {data.set(d.Code, d[year])})
 
      .await(ready);
    
    function ready(error, topo) {
    
      
      svg.append("g")
        .selectAll("path")
        .data(topo.features)
        .enter()
        .append("path")
          // draw each country
          .attr("d", d3.geoPath()
            .projection(projection)
          )

          // set the color of each country
          .attr("fill", function (d) {
            d.total = data.get(d.id) || 0;
            return colorScale(d.total);
          })

          //mouseover / mouseout
          .on("mouseover", function() {
  d3.select(this).attr("r", 10).style("fill", "#CD7373");
  document.getElementById("#mapval").innerHTML = this;

})                  
.on("mouseout", function(d) {
  d3.select(this).attr("r", 5.5).style("fill",function(){return colorScale(d.total);});
});
          
        }
    }
    